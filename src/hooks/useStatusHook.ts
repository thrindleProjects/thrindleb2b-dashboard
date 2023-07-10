import { orderStatus as orderStatusType } from '@/@types';

const useOrderStatusHook = ({
  orderStatus,
}: {
  orderStatus: orderStatusType;
}) => {
  let orderStyle: { bgColor: string; textColor: string; text: string } | null =
    null;

  if (orderStatus === 'completed') {
    orderStyle = {
      bgColor: 'bg-blue-50',
      textColor: 'text-[#065DA7]',
      text: 'Completed',
    };
  } else if (orderStatus === 'pending') {
    orderStyle = {
      bgColor: 'bg-yellow-50',
      textColor: 'text-[#FEA218]',
      text: 'Pending',
    };
  } else if (orderStatus === 'in-progress') {
    orderStyle = {
      bgColor: 'bg-yellow-50',
      textColor: 'text-[#FEA218]',
      text: 'In-Progress',
    };
  } else if (orderStatus === 'requested') {
    orderStyle = {
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-500',
      text: 'Requested',
    };
  } else if (orderStatus === 'cancelled') {
    orderStyle = {
      bgColor: 'bg-red-50',
      textColor: 'text-red-500',
      text: 'Cancelled',
    };
  } else if (orderStatus === 'owing') {
    orderStyle = {
      bgColor: 'bg-red-50',
      textColor: 'text-red-500',
      text: 'Owing',
    };
  } else {
    orderStyle = {
      bgColor: 'bg-yellow-50',
      textColor: 'text-[#FEA218]',
      text: 'In-Progress',
    };
  }
  return {
    orderStyle,
  };
};

export default useOrderStatusHook;
