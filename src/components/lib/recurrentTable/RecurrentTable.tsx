import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { ImSpinner2 } from 'react-icons/im';

import RecurrentTableRow from '@/components/lib/recurrentTableRow/RecurrentTableRow';
import Pagination from '@/components/shared/Pagination';

import { GeneralOrderStatus } from '@/@types';
import { useGetRecurrentOrdersQuery } from '@/api/orders';

interface RecurrentTableProps {
  title: 'In Progress' | 'Completed' | 'Pending' | 'Requested' | 'VIP';
}

type RecurrentTableType = React.FC<RecurrentTableProps>;

const RecurrentTable: RecurrentTableType = ({ title }) => {
  const { query } = useRouter();

  const { page } = query;

  const currentPage: number = useMemo(() => Number(page) || 1, [page]);

  const status = useMemo(() => {
    if (title === 'VIP') return 'owing';

    return title.toLowerCase().split(' ').join('-') as Exclude<
      GeneralOrderStatus,
      'all'
    >;
  }, [title]);

  const {
    data: orders,
    isLoading,
    error,
  } = useGetRecurrentOrdersQuery(
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
              <th className='py-5 font-medium'>Status</th>
              <th className='py-5 font-medium'>Order Day</th>
              <th className='py-5 font-medium'>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders &&
              !!orders.data.data.length &&
              !isLoading &&
              !error &&
              orders.data.data.map((order, index) => {
                return (
                  <RecurrentTableRow
                    key={order.id}
                    {...order}
                    index={index}
                    currentPage={currentPage}
                  />
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

export default RecurrentTable;
