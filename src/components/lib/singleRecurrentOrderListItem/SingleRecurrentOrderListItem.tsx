import { useRouter } from 'next/router';
import { KeyboardEvent, useMemo } from 'react';

import clsxm from '@/lib/clsxm';
import { useDisclosure } from '@/hooks';

import ImageComponent from '@/components/shared/ImageComponent';

import { RecurrentOrderListItemType } from '@/api/orders/types';
import { IMAGE_BASE_URL } from '@/constant';
import { formatDateWithYear, getQueryParams } from '@/utils/functions';

interface SingleRecurrentOrderListItemProps extends RecurrentOrderListItemType {
  index: number;
}

type SingleRecurrentOrderListItemType =
  React.FC<SingleRecurrentOrderListItemProps>;

const SingleRecurrentOrderListItem: SingleRecurrentOrderListItemType = ({
  images,
  name,
  createdAt,
  index,
  id,
  description,
  price,
  substitutes,
  quantity,
  isAvailable,
}) => {
  const { toggle, isOpen: seeMore } = useDisclosure();

  const router = useRouter();

  const { itemId } = router.query;

  const isActive: boolean = useMemo(() => {
    if (!index && !itemId) return true;

    return itemId === id;
  }, [itemId, index, id]);

  const image: string = useMemo(() => {
    return images ? images[0] || '' : '';
  }, [images]);

  const handleClick = () => {
    const [asPathUrl, asPathQuery] = router.asPath.split('?');
    const resolvedQuery = getQueryParams(asPathQuery ?? '');

    router.replace(
      {
        pathname: asPathUrl,
        query: { ...resolvedQuery, itemId: id },
      },
      {
        pathname: asPathUrl,
        query: { ...resolvedQuery, itemId: id },
      },
      { shallow: true }
    );
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={clsxm(
        'outline-primary-black/10 w-full rounded-lg outline',
        'p-3',
        'focus-visible:ring-primary-blue focus-visible:outline-none focus-visible:ring',
        [isActive && 'outline-primary-blue']
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role='button'
      tabIndex={0}
    >
      <span className='flex justify-between text-left'>
        <span className='flex flex-col gap-2'>
          <span className='flex items-center gap-4'>
            <span className='relative block aspect-square w-14'>
              <ImageComponent src={`${IMAGE_BASE_URL}/${image}`} alt={name} />
            </span>

            <span className='flex flex-col text-left'>
              <span className='text-primary-black text-sm font-semibold xl:text-base'>
                {name}
              </span>
              <span className='text-primary-black/60 text-xs font-medium xl:text-sm'>
                Order Created {formatDateWithYear(createdAt)}
              </span>
            </span>
          </span>

          <span className='text-primary-black/60 text-xs font-medium'>
            {seeMore || description.length < 150
              ? description
              : `${description.substring(0, 150)}...`}{' '}
            {description.length > 150 && (
              <button
                className={clsxm(
                  'text-primary-blue px-1 text-[0.85em] font-bold',
                  [seeMore && 'block']
                )}
                onClick={toggle}
              >
                {seeMore ? 'See less' : 'See more'}
              </button>
            )}
          </span>

          <span className='text-primary-blue blue-gradient h-max w-max rounded-lg px-3 py-2 text-sm font-semibold xl:text-base'>
            {quantity} {quantity > 1 ? 'Pieces' : 'Piece'}
          </span>
        </span>

        <span className='flex flex-col items-end gap-1'>
          {!!price && (
            <span className='text-primary-green border-primary-black/10 h-max w-max rounded-lg border p-2 text-center text-xs font-medium lg:flex-shrink-0'>
              Price Added
            </span>
          )}

          {substitutes && !!substitutes.length && (
            <span className='text-primary-green border-primary-black/10 h-max w-max rounded-lg border p-2 text-center text-xs font-medium lg:flex-shrink-0'>
              Substitutes Added
            </span>
          )}

          {!isAvailable && (
            <span className='text-primary-red border-primary-black/10 h-max w-max rounded-lg border p-2 text-center text-xs font-medium lg:flex-shrink-0'>
              Unavailable
            </span>
          )}
        </span>
      </span>
    </div>
  );
};

export default SingleRecurrentOrderListItem;
