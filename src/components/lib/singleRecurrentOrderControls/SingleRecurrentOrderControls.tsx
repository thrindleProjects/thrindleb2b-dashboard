import { useRouter } from 'next/router';
import { useMemo } from 'react';

import clsxm from '@/lib/clsxm';

import SingleRecurrentOrderListItemForm from '@/components/lib/singleRecurrentOrderListItemForm';
import SingleRecurrentOrderSuggestedOptions from '@/components/lib/singleRecurrentOrderSuggestedOptions';
import ImageComponent from '@/components/shared/ImageComponent';

import { useGetRecurrentOrderByIdQuery } from '@/api/orders';
import { RecurrentOrderListItemType } from '@/api/orders/types';
import { IMAGE_BASE_URL } from '@/constant';
import { useDisclosure } from '@/utils/hooks';

const SingleRecurrentOrderControls: React.FC = () => {
  const { toggle, isOpen: seeMore } = useDisclosure();

  const { query } = useRouter();

  const { recurrentId, itemId } = query;

  const { data } = useGetRecurrentOrderByIdQuery(recurrentId as string, {
    skip: !recurrentId,
    refetchOnFocus: false,
    refetchOnMountOrArgChange: false,
  });

  const item: undefined | RecurrentOrderListItemType = useMemo(() => {
    if (!data) {
      return undefined;
    }

    if (!itemId) return data.data.listItems[0];

    return data.data.listItems.find((item) => item.id === itemId);
  }, [itemId, data]);

  if (!item) {
    return (
      <div className='text-primary-blue grid h-full w-full place-items-center rounded-lg bg-white text-lg font-medium'>
        Nothing to see here
      </div>
    );
  }

  return (
    <section className='text-primary-black no-scrollbar flex h-full w-full flex-col gap-6 overflow-y-auto rounded-lg bg-white p-8'>
      <h3 className='text-primary-black text-base font-medium xl:text-lg'>
        {item.name}
      </h3>

      <div className='flex flex-col gap-2'>
        <div className='bg-primary-black/10 relative aspect-square w-1/2 overflow-hidden rounded-lg lg:w-2/5 xl:w-1/3'>
          <ImageComponent
            src={`${IMAGE_BASE_URL}/${item.images ? item.images[0] || '' : ''}`}
            alt={item.name}
          />
        </div>
        <p className='text-primary-black text-base font-semibold xl:text-lg'>
          {item.name}
        </p>
        <p className='text-primary-black/60 text-xs font-medium xl:text-sm'>
          {seeMore || item.description.length < 300
            ? item.description
            : `${item.description.substring(0, 300)}...`}{' '}
          {item.description.length > 300 && (
            <button
              className={clsxm(
                'text-primary-blue px-1 text-[0.85em] font-bold',
                [seeMore && 'block']
              )}
              onClick={toggle}
              type='button'
            >
              {seeMore ? 'See less' : 'See more'}
            </button>
          )}
        </p>
        <p className='text-primary/60 text-sm font-semibold xl:text-base'>
          {item.quantity} {item.quantity > 1 ? 'Pieces' : 'Piece'}
        </p>
      </div>
      <SingleRecurrentOrderListItemForm {...item} />

      <SingleRecurrentOrderSuggestedOptions id={item.id} />
    </section>
  );
};

export default SingleRecurrentOrderControls;
