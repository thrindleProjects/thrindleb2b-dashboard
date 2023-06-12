import { Icon } from '@iconify/react';

import clsxm from '@/lib/clsxm';

import ImageComponent from '@/components/shared/ImageComponent/ImageComponent';

import { SubstituteItemType } from '@/api/orders/types';
import { IMAGE_BASE_URL } from '@/constant';
import { useDisclosure } from '@/utils/hooks';

type SingleOrderSuggestedItemProps = SubstituteItemType;

type SingleOrderSuggestedItemType = React.FC<SingleOrderSuggestedItemProps>;

const SingleOrderSuggestedItem: SingleOrderSuggestedItemType = ({
  id,
  name,
  images,
  description,
  price,
}) => {
  const { toggle, isOpen: seeMore } = useDisclosure();

  return (
    <div
      key={id}
      className='border-primary-black/10 grid grid-cols-[30%_1fr_auto] grid-rows-1 gap-2 rounded-lg border p-4'
    >
      <div className='bg-primary-black/10 relative aspect-square w-full'>
        <ImageComponent alt={name} src={`${IMAGE_BASE_URL}/${images[0]}`} />
      </div>
      <section className='flex flex-col justify-between gap-2'>
        <h6 className='text-primary/60 text-sm font-semibold xl:text-base'>
          {name}
        </h6>
        <p className='text-primary-black/60 text-xs font-medium xl:text-sm'>
          {seeMore || description.length < 100
            ? description
            : `${description.substring(0, 100)}...`}{' '}
          {description.length > 150 && (
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
          &#8358;{price?.toLocaleString()}
        </p>
      </section>
      <div className='flex h-full items-start'>
        <button className='text-primary-red h-max text-lg' type='button'>
          <Icon icon='ph:x' />
        </button>
      </div>
    </div>
  );
};

export default SingleOrderSuggestedItem;
