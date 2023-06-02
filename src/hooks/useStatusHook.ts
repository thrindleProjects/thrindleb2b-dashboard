import { orderStatus as orderStatusType } from '@/@types/appTypes';

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
