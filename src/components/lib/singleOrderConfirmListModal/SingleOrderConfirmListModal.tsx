import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { toast } from 'react-hot-toast';
import Modal from 'react-modal';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import SingleOrderServiceForm from '@/components/lib/singleOrderServiceForm';

import {
  useGetOrderByIdQuery,
  useSendOrderPriceListMutation,
} from '@/api/orders';

interface SingleOrderConfirmListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SingleOrderConfirmListModalType =
  React.FC<SingleOrderConfirmListModalProps>;

const SingleOrderConfirmListModal: SingleOrderConfirmListModalType = ({
  isOpen,
  onClose,
}) => {
  const { query } = useRouter();

  const { orderId } = query;

  const { data } = useGetOrderByIdQuery(orderId as string, { skip: !orderId });

  const [sendOrder, { isLoading }] = useSendOrderPriceListMutation();

  const numberOfItems = useMemo(() => {
    return data?.data.listItems.length;
  }, [data?.data.listItems.length]);

  const totalCostOfItems: string = useMemo(() => {
    return (
      data?.data.listItems
        .reduce((acc, curr) => {
          acc += (curr.price || 0) * curr.quantity;
          return acc;
        }, 0)
        .toLocaleString() || '0'
    );
  }, [data?.data.listItems]);

  const totalCostOfOrder: string = useMemo(() => {
    return (
      parseInt(totalCostOfItems.replaceAll(',', '')) +
      (data?.data?.serviceCharge || 0) +
      (data?.data?.deliveryFee || 0)
    ).toLocaleString();
  }, [totalCostOfItems, data?.data?.serviceCharge, data?.data?.deliveryFee]);

  const orderValid: boolean = useMemo(() => {
    return !!data?.data?.serviceCharge && !!data?.data?.deliveryFee;
  }, [data?.data?.serviceCharge, data?.data?.deliveryFee]);

  if (!data) {
    return <></>;
  }

  const { data: order } = data;

  const handleSendOrder = async () => {
    if (!orderValid) {
      return toast.error('Sevice charge and delivery fee required');
    }

    try {
      await sendOrder(data.data.id).unwrap();
      toast.success('Price list sent successfully');
      onClose();
    } catch (error) {
      logger(error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc
      style={{
        overlay: {
          backgroundColor: '#00000020',
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'auto',
        },
        content: {
          outline: 'none',
        },
      }}
      shouldCloseOnOverlayClick={true}
      shouldReturnFocusAfterClose={true}
      ariaHideApp={false}
      className='max-h-[calc(100vh-2rem)] w-11/12 max-w-xl overflow-y-auto rounded-lg bg-white px-6 py-10 outline-none'
    >
      <div className='flex flex-col gap-5'>
        <section className='border-b-primary-black/10 flex items-center justify-between border-b pb-4 text-sm font-semibold xl:text-base'>
          <h4>Confirm List</h4>
          <button className='text-[1.5em]' onClick={onClose}>
            <Icon icon='ph:x' />
          </button>
        </section>

        <section className='flex flex-col gap-1'>
          <h5 className='text-primary-black text-sm font-semibold xl:text-base'>
            Order {order.orderRefCode}
          </h5>
          <p className='text-primary-black/80 text-xs font-medium xl:text-xs'>
            {order.company.companyName || 'N/A'}
          </p>
          <p className='text-primary-black/80 text-xs font-medium xl:text-xs'>
            {order.company.address || 'N/A'}
          </p>
          <p className='text-primary-black/80 text-xs font-medium xl:text-xs'>
            {order.company.state}
          </p>
          <p className='text-primary-black/80 text-sm font-semibold xl:text-base'>
            {numberOfItems}
            {!!numberOfItems && numberOfItems > 1 ? ' Items' : ' Item'}
          </p>
        </section>

        <section className='border-b-primary-black/10 flex flex-col gap-1 border-b pb-4'>
          <h5 className='text-primary-black text-sm font-semibold xl:text-base'>
            Price Details
          </h5>
          <p className='text-primary-black/60 flex justify-between font-medium'>
            <span className='text-xs xl:text-sm'>Amount</span>

            <span className='text-sm xl:text-base'>
              &#8358;{totalCostOfItems}
            </span>
          </p>
        </section>

        <SingleOrderServiceForm />

        <section>
          <p className='text-primary-black/60 flex justify-between font-semibold'>
            <span className='text-xs xl:text-sm'>Total Amount</span>

            <span className='text-primary-black text-sm xl:text-base'>
              &#8358;{totalCostOfOrder}
            </span>
          </p>
        </section>

        <Button
          className='bg-primary-blue rounded-lg px-10 py-3 text-sm font-semibold text-white outline-none focus:ring xl:text-base'
          onClick={handleSendOrder}
          isLoading={isLoading}
          disabled={!orderValid}
        >
          Send List
        </Button>
      </div>
    </Modal>
  );
};

export default SingleOrderConfirmListModal;
