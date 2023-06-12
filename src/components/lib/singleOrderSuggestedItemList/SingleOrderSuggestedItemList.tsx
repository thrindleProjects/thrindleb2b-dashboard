import { useRouter } from 'next/router';
import { useMemo } from 'react';

import SingleOrderSuggestedItem from '@/components/lib/singleOrderSuggestedItem/SingleOrderSuggestedItem';

import { useGetOrderByIdQuery } from '@/api/orders';
import { ListItemType } from '@/api/orders/types';

const SingleOrderSuggestedItemList: React.FC = () => {
  const {
    query: { itemId, orderId },
  } = useRouter();

  const { data } = useGetOrderByIdQuery(orderId as string, {
    skip: !orderId,
    refetchOnFocus: false,
    refetchOnMountOrArgChange: false,
  });

  const substitutes: ListItemType['substitutes'] = useMemo(() => {
    if (!data) {
      return [];
    }

    let listItem: ListItemType | undefined;

    if (itemId) {
      listItem = data.data.listItems.find((item) => item.id === itemId);
    } else {
      listItem = data.data.listItems[0];
    }

    if (!listItem) return [];

    return listItem.substitutes;
  }, [data, itemId]);

  return (
    <div className='flex flex-col gap-2'>
      {substitutes.map((subItem) => {
        return <SingleOrderSuggestedItem {...subItem} key={subItem.id} />;
      })}
    </div>
  );
};

export default SingleOrderSuggestedItemList;
