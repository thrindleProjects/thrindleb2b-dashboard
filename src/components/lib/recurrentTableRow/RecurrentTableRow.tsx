import Link from 'next/link';
import { useMemo } from 'react';

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import RecurrentTableRowMenu from '@/components/lib/recurrentTableRowMenu/RecurrentTableRowMenu';

import { RecurrentOrderType } from '@/api/orders/types';
import { ORDERS_PER_PAGE } from '@/constant';
import { getPositionSuffix } from '@/utils/functions';

interface RecurrentTableRowProps extends RecurrentOrderType {
  index: number;
  currentPage: number;
}

type RecurrentTableRowType = React.FC<RecurrentTableRowProps>;

const RecurrentTableRow: RecurrentTableRowType = ({
  currentPage,
  index,
  ...order
}) => {
  const serialNumber: number = useMemo(
    () => ORDERS_PER_PAGE * (currentPage - 1) + (index + 1),
    [currentPage, index]
  );

  return (
    <>
      <tr
        className='text-primary-black/80 text-xs font-medium xl:text-sm'
        key={order.id}
      >
        <td>{serialNumber}</td>
        <td>{order.orderRefCode}</td>
        <td>{order.company.companyName || 'N/A'}</td>
        <td>{order.listItems.length}</td>
        <td>
          &#8358;
          {order.recurringPaymentAmount?.toLocaleString() || 0}
        </td>
        <td>
          {order.company.contactPhone ||
            order.company.alternateContactPhone ||
            'N/A'}
          <span>
            <span className='inline-block h-3 w-3 '></span>
          </span>
        </td>
        <td>
          {order.recurringDeliveryDay
            ? `${order.recurringDeliveryDay}${getPositionSuffix(
                order.recurringDeliveryDay
              )}`
            : 'N/A'}
        </td>
        <td>
          <span className='flex items-center gap-1'>
            <Link
              href={`/recurrent/${order.id}`}
              className='bg-primary-blue focus:ring-primary-blue/60 rounded-lg px-4 py-4 text-center text-xs text-white focus:outline-none focus:ring xl:text-sm'
            >
              View Order
            </Link>

            <RecurrentTableRowMenu {...order} />
          </span>
        </td>
      </tr>
    </>
  );
};

export default RecurrentTableRow;
