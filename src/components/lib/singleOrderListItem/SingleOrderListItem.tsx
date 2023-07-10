import { useRouter } from 'next/router';
import { KeyboardEvent, useMemo } from 'react';

import clsxm from '@/lib/clsxm';
import { useDisclosure } from '@/hooks';

import ImageComponent from '@/components/shared/ImageComponent';

import { ListItemType } from '@/api/orders/types';
import { IMAGE_BASE_URL } from '@/constant';
import { formatDateWithYear, getQueryParams } from '@/utils/functions';

interface SingleOrderListItemProps extends ListItemType {
  index: number;
}

type SingleOrderListItemType = React.FC<SingleOrderListItemProps>;

const SingleOrderListItem: SingleOrderListItemType = ({
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
      <div className='flex justify-between text-left'>
        <div className='flex max-w-[60%] flex-col gap-2 xl:max-w-[75%]'>
          <section className='flex items-center gap-4'>
            <figure className='relative block aspect-square w-14'>
              <ImageComponent src={`${IMAGE_BASE_URL}/${image}`} alt={name} />
            </figure>

            <div className='flex flex-col text-left'>
              <h5 className='text-primary-black text-sm font-semibold xl:text-base'>
                {name}
              </h5>
              <p className='text-primary-black/60 text-xs font-medium xl:text-sm'>
                Order Created {formatDateWithYear(createdAt)}
              </p>
            </div>
          </section>

          <div className='text-primary-black/60 break-words text-xs font-medium'>
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
          </div>
          <div className='flex flex-wrap gap-2 text-xs font-medium xl:text-sm'>
            <div className='text-primary-blue blue-gradient rounded-lg px-3 py-2'>
              {quantity} {quantity > 1 ? 'Pieces' : 'Piece'}
            </div>
            {substitutes && !!substitutes.length && (
              <div className='yellow-gradient text-primary-yellow rounded-lg px-3 py-2'>
                Options Added
              </div>
            )}

            {!isAvailable && (
              <div className='red-gradient text-primary-red rounded-lg px-3 py-2'>
                Unavailable
              </div>
            )}
          </div>
        </div>

        <div className='flex flex-col items-end gap-1'>
          {!!price && (
            <div className='text-primary-green border-primary-black/10 h-max w-max rounded-lg border p-2 text-center text-xs font-medium lg:flex-shrink-0 xl:px-4 xl:py-2'>
              Price Added
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleOrderListItem;
