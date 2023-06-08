import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { ImSpinner2 } from 'react-icons/im';

import Pagination from '@/components/shared/Pagination';

import { GeneralOrderStatus } from '@/@types/appTypes';
import { useGetOrdersQuery } from '@/api/orders';
import { ORDERS_PER_PAGE } from '@/constant';
import { formatDate } from '@/utils/functions';

interface OrdersTableProps {
  title: 'In Progress' | 'Completed' | 'Pending' | 'Requested' | 'VIP';
}

type OrdersTableType = React.FC<OrdersTableProps>;

const OrdersTable: OrdersTableType = ({ title }) => {
  const { query } = useRouter();

  const { page } = query;

  const currentPage: number = useMemo(() => Number(page) || 1, [page]);

  const status = useMemo(() => {
    if (title === 'VIP') return 'owing';

    return title.toLowerCase().split(' ').join('-') as GeneralOrderStatus;
  }, [title]);

  const {
    data: orders,
    isLoading,
    error,
  } = useGetOrdersQuery(
    {
      page: currentPage,
      status,
    },
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
    }
  );

  return (
    <section className='flex w-full flex-col gap-5 bg-white py-5'>
      <div className='flex items-center justify-between px-4'>
        <h5 className='text-base font-medium xl:text-lg'>{title} Orders</h5>
        <div>
          <Pagination count={orders?.data.lastpage || 1} />
        </div>
      </div>

      <div className='px-8'>
        <table className='w-full border-separate border-spacing-y-3'>
          <thead>
            <tr className='text-primary-black/60 text-left text-sm xl:text-base'>
              <th className='py-5 font-medium'>S/N</th>
              <th className='py-5 font-medium'>Order ID</th>
              <th className='py-5 font-medium'>Customer Name</th>
              <th className='py-5 font-medium'>Items</th>
              <th className='py-5 font-medium'>Amount</th>
              <th className='py-5 font-medium'>Phone Number</th>
              <th className='py-5 font-medium'>Date</th>
              <th className='py-5 font-medium'></th>
            </tr>
          </thead>

          <tbody>
            {orders &&
              !!orders.data.data.length &&
              !isLoading &&
              !error &&
              orders.data.data.map((order, index) => {
                const serialNumber =
                  ORDERS_PER_PAGE * (currentPage - 1) + (index + 1);

                return (
                  <tr
                    className='text-primary-black/80 text-sm font-medium xl:text-base'
                    key={order.id}
                  >
                    <td>{serialNumber}</td>
                    <td>{order.orderRefCode}</td>
                    <td>{order.company.companyName || 'N/A'}</td>
                    <td>{order.listItems.length}</td>
                    <td>&#8358;{order.paymentTotal?.toLocaleString()}</td>
                    <td>
                      {order.company.contactPhone ||
                        order.company.alternateContactPhone ||
                        'N/A'}
                    </td>
                    <td>{formatDate(order.createdAt)}</td>
                    <td className='flex'>
                      <Link
                        href={`/orders/${order.id}`}
                        className='bg-primary-blue focus:ring-primary-blue/60 rounded-lg px-4 py-4 text-white focus:outline-none focus:ring'
                      >
                        View Order
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {!orders && isLoading && (
          <div className='flex items-center justify-center'>
            <ImSpinner2 className='text-primary-blue animate-spin text-3xl' />
          </div>
        )}
        {!orders && !isLoading && !!error && (
          <div className='text-primary-red/80 text-center text-3xl font-semibold'>
            Something went wrong!
          </div>
        )}
        {orders && !orders.data.data.length && !isLoading && !error && (
          <div className='text-primary-blue/80 text-center text-3xl font-semibold'>
            Nothing to see here
          </div>
        )}
      </div>
    </section>
  );
};

export default OrdersTable;
