import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { useDisclosure } from '@/hooks';

import Button from '@/components/buttons/Button';
import OrderStatusInfo from '@/components/lib/orderStatusInfo';
import RecurrentTableRowMenu from '@/components/lib/recurrentTableRowMenu/RecurrentTableRowMenu';
import SingleRecurrentOrderConfirmListModal from '@/components/lib/singleRecurrentOrderConfirmListModal/SingleRecurrentOrderConfirmListModal';

import { useGetRecurrentOrderByIdQuery } from '@/api/orders';

const SingleRecurrentOrderHeader: React.FC = () => {
  const { query } = useRouter();

  const { recurrentId } = query;

  const { isOpen, close, open } = useDisclosure();

  const { data } = useGetRecurrentOrderByIdQuery(recurrentId as string, {
    skip: !recurrentId,
  });

  const numberOfItems = useMemo(() => {
    return data?.data.listItems.length;
  }, [data?.data.listItems.length]);

  const allItemsValid = useMemo(() => {
    return data?.data.listItems.every((item) => {
      if (item.isAvailable) {
        return (
          !!item.price &&
          (item.substitutes.length
            ? item.substitutes.every((sub) => !!sub.price)
            : true)
        );
      }

      return (
        !item.price &&
        (item.substitutes.length
          ? item.substitutes.every((sub) => !!sub.price)
          : true)
      );
    });
  }, [data?.data.listItems]);

  const totalCostOfOrder: string = useMemo(() => {
    return (
      (
        (data?.data.listItems.reduce((acc, curr) => {
          acc += (curr.price || 0) * curr.quantity;
          return acc;
        }, 0) || 0) +
        (data?.data?.serviceCharge || 0) +
        (data?.data?.deliveryFee || 0)
      ).toLocaleString() || '0'
    );
  }, [
    data?.data.listItems,
    data?.data?.serviceCharge,
    data?.data?.deliveryFee,
  ]);

  if (!data) {
    return <></>;
  }

  const { data: order } = data;

  return (
    <>
      <OrderStatusInfo
        status={order.orderStatus}
        price={order.recurringPaymentAmount || 0}
        // TODO fix the date of this order
        date={new Date(order.recurringDeliveryDay || '').toISOString()}
      />

      <nav className='text-primary-black flex flex-row gap-2 text-sm font-semibold xl:text-base'>
        <Link
          href={`/recurrent${
            order.orderStatus === 'pending'
              ? ''
              : order.orderStatus === 'owing'
              ? '/vip'
              : `/${order.orderStatus.toLowerCase()}`
          }`}
          className='text-primary-black/60'
        >
          Recurrent Orders
        </Link>
        {' / '}
        <span>Order #{order.orderRefCode}</span>
      </nav>

      <section
        className={`mt-6 flex items-center justify-between ${
          allItemsValid ? 'rounded-lg bg-white px-6 py-4' : 'bg-transparent'
        }`}
      >
        <div className='flex flex-col gap-2'>
          <h4 className='text-primary-black text-xl font-semibold xl:text-2xl'>
            Order {order.orderRefCode}
          </h4>
          <p className='text-primary-black/80 text-sm font-medium xl:text-base'>
            {order.company.companyName || 'N/A'}
          </p>
          <p className='text-primary-black/80 text-sm font-semibold xl:text-base'>
            {numberOfItems}
            {!!numberOfItems && numberOfItems > 1 ? ' Items' : ' Item'}
          </p>
          {allItemsValid && (
            <>
              <p className='text-primary-black/60 text-sm font-semibold xl:text-base'>
                Total Amount
              </p>
              <p className='text-primary-black/60 text-xl font-semibold xl:text-2xl'>
                &#8358;{totalCostOfOrder}
              </p>
            </>
          )}
        </div>

        <div className='flex items-center gap-2'>
          {allItemsValid && data.data.orderStatus === 'requested' && (
            <Button
              className='bg-primary-blue rounded-lg px-10 py-4 text-sm font-semibold text-white outline-none focus:ring xl:text-base'
              onClick={open}
            >
              Send Price List
            </Button>
          )}
          <RecurrentTableRowMenu {...order} />
        </div>

        <SingleRecurrentOrderConfirmListModal onClose={close} isOpen={isOpen} />
      </section>
    </>
  );
};

export default SingleRecurrentOrderHeader;
