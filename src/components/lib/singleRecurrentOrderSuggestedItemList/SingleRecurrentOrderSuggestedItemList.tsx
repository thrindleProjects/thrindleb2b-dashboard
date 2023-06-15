import { useRouter } from 'next/router';
import { useMemo } from 'react';

import SingleOrderSuggestedItem from '@/components/lib/singleOrderSuggestedItem/SingleOrderSuggestedItem';

import { useGetRecurrentOrderByIdQuery } from '@/api/orders';
import { RecurrentOrderListItemType } from '@/api/orders/types';

const SingleRecurrentOrderSuggestedItemList: React.FC = () => {
  const {
    query: { itemId, recurrentId },
  } = useRouter();

  const { data } = useGetRecurrentOrderByIdQuery(recurrentId as string, {
    skip: !recurrentId,
    refetchOnFocus: false,
    refetchOnMountOrArgChange: false,
  });

  const substitutes: RecurrentOrderListItemType['substitutes'] = useMemo(() => {
    if (!data) {
      return [];
    }

    let listItem: RecurrentOrderListItemType | undefined;

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

export default SingleRecurrentOrderSuggestedItemList;
