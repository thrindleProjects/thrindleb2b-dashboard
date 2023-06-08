import { formatDate } from '@/utils/functions';

interface OrderStatusInfoProps {
  sent: boolean;
  paid: boolean;
  scheduled: boolean;
  price: number;
  date: string;
}

type OrderStatusInfoType = React.FC<OrderStatusInfoProps>;

const OrderStatusInfo: OrderStatusInfoType = ({
  sent,
  scheduled,
  paid,
  price,
  date,
}) => {
  if (!sent && !scheduled && !paid) {
    return <></>;
  }

  if (scheduled && date && price) {
    return (
      <h1 className='blue-gradient absolute inset-x-0 top-0 px-[inherit] py-3 text-sm font-medium'>
        Payment of{' '}
        <span className='text-primary-blue'>#{price.toLocaleString()}</span> has
        been scheduled for this list to be paid on the{' '}
        <span className='text-primary-blue'>{formatDate(date)}</span>, proceed
        to delivery
      </h1>
    );
  }

  if (paid && price) {
    return (
      <h1 className='green-gradient absolute inset-x-0 top-0 px-[inherit] py-3 text-sm font-medium'>
        Payment of #{price.toLocaleString()} has been made for this list,
        proceed to delivery
      </h1>
    );
  }

  return (
    <h1 className='yellow-gradient absolute inset-x-0 top-0 px-[inherit] py-3 text-sm font-medium'>
      Price list has been sent to the user, awaiting payment
    </h1>
  );
};

export default OrderStatusInfo;
