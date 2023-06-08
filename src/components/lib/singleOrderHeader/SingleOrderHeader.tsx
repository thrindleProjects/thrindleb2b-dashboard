import Link from 'next/link';
import { useRouter } from 'next/router';

import OrderStatusInfo from '@/components/lib/orderStatusInfo/OrderStatusInfo';

const SingleOrderHeader: React.FC = () => {
  const { query, isReady } = useRouter();

  if (!isReady) {
    return <></>;
  }

  const { orderId } = query;

  return (
    <>
      <OrderStatusInfo
        sent={Number(orderId) > 1}
        paid={Number(orderId) > 2}
        scheduled={Number(orderId) > 3}
        price={500000}
        date={new Date().toISOString()}
      />
      <nav className='text-primary-black flex flex-row gap-2 text-sm font-semibold xl:text-base'>
        <Link href='/orders' className='text-primary-black/60'>
          Orders
        </Link>
        {' / '}
        <span>Order #{orderId}</span>
      </nav>

      <section
        className={`mt-6 flex items-center justify-between ${
          Number(orderId) % 2
            ? 'bg-transparent'
            : 'rounded-lg bg-white px-6 py-4'
        }`}
      >
        <div className='flex flex-col gap-2'>
          <h4 className='text-primary-black text-xl font-semibold xl:text-2xl'>
            Order {orderId}
          </h4>
          <p className='text-primary-black/80 text-sm font-medium xl:text-base'>
            Criters Vet
          </p>
          <p className='text-primary-black/80 text-sm font-semibold xl:text-base'>
            3 Items
          </p>
          <p className='text-primary-black/60 text-sm font-semibold xl:text-base'>
            Total Amount
          </p>
          <p className='text-primary-black/60 text-xl font-semibold xl:text-2xl'>
            #500,000
          </p>
        </div>

        <button className='bg-primary-blue rounded-lg px-10 py-4 text-sm font-semibold text-white outline-none focus:ring xl:text-base'>
          Send Price List
        </button>
      </section>
    </>
  );
};

export default SingleOrderHeader;
