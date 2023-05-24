import Link from 'next/link';

import type { SingleOrder } from '@/pages/orders';
import { getDayPosition } from '@/utils/functions';

interface RecurrentOrderTableProps {
  orders: SingleOrder[];
}

type RecurrentOrderTableType = React.FC<RecurrentOrderTableProps>;

const RecurrentOrderTable: RecurrentOrderTableType = ({ orders }) => {
  return (
    <section className='flex w-full flex-col gap-5 bg-white py-5'>
      <div className='flex items-center justify-between px-4'>
        <h5 className='text-base font-medium xl:text-lg'>Recurrent Orders</h5>
        <div>Pagination</div>
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
              <th className='py-5 font-medium'>Order Day</th>
              <th className='py-5 font-medium'></th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => {
              return (
                <tr
                  className='text-primary-black/80 text-sm font-medium xl:text-base'
                  key={order.id}
                >
                  <td>{index + 1}</td>
                  <td>{order.orderId}</td>
                  <td>{order.companyName}</td>
                  <td>{order.quantity}</td>
                  <td>&#8358;{order.amount.toLocaleString()}</td>
                  <td>{order.phoneNumber}</td>
                  <td>{getDayPosition(order.date)}</td>
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
      </div>
    </section>
  );
};

export default RecurrentOrderTable;
