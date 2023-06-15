import { formatDate } from '@/utils/functions';

interface OrderStatusInfoProps {
  status: 'in-progress' | 'requested' | 'pending' | 'completed' | 'owing';
  /**
   * Total price of order
   */
  price: number;
  /**
   * If order is scheduled, this field should be provided
   */
  date?: string | null;
}

type OrderStatusInfoType = React.FC<OrderStatusInfoProps>;

const OrderStatusInfo: OrderStatusInfoType = ({ price, date, status }) => {
  if (status === 'completed' || status === 'requested') {
    return <></>;
  }

  if (status === 'owing') {
    return (
      <h1 className='blue-gradient absolute inset-x-0 top-0 px-[inherit] py-3 text-sm font-medium'>
        Payment of{' '}
        <span className='text-primary-blue'>#{price.toLocaleString()}</span> has
        been scheduled for this list to be paid on the{' '}
        <span className='text-primary-blue'>{formatDate(date || '')}</span>,
        proceed to delivery
      </h1>
    );
  }

  if (status === 'pending') {
    return (
      <h1 className='green-gradient absolute inset-x-0 top-0 px-[inherit] py-3 text-sm font-medium'>
        Payment of #{price.toLocaleString()} has been made for this list,
        proceed to delivery
      </h1>
    );
  }

  if (status === 'in-progress') {
    return (
      <h1 className='yellow-gradient absolute inset-x-0 top-0 px-[inherit] py-3 text-sm font-medium'>
        Price list has been sent to the user, awaiting payment
      </h1>
    );
  }

  return <></>;
};

export default OrderStatusInfo;
