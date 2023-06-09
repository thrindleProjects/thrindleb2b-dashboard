import { useRouter } from 'next/router';
import { useMemo } from 'react';

import SingleOrderListItemForm from '@/components/lib/singleOrderListItemForm/SingleOrderListItemForm';
import ImageComponent from '@/components/shared/ImageComponent/ImageComponent';

import { useGetOrderByIdQuery } from '@/api/orders';
import { ListItemType } from '@/api/orders/types';
import { IMAGE_BASE_URL } from '@/constant';

const SingleOrderControls: React.FC = () => {
  const { query } = useRouter();

  const { orderId, s: activeItem } = query;

  const { data } = useGetOrderByIdQuery(orderId as string, {
    skip: !orderId,
    refetchOnFocus: false,
    refetchOnMountOrArgChange: false,
  });

  const item: undefined | ListItemType = useMemo(() => {
    if (!data) {
      return undefined;
    }

    if (!activeItem) return data.data.listItems[0];

    return data.data.listItems.find((item) => item.id === activeItem);
  }, [activeItem, data]);

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
          {item.description}
        </p>
        <p className='text-primary/60 text-sm font-semibold xl:text-base'>
          {item.quantity} {item.quantity > 1 ? 'Pieces' : 'Piece'}
        </p>
      </div>

      <SingleOrderListItemForm price={item.price} id={item.id} />
    </section>
  );
};

export default SingleOrderControls;
