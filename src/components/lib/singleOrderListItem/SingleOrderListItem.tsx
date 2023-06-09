import { useRouter } from 'next/router';
import { MouseEvent, useMemo } from 'react';

import clsxm from '@/lib/clsxm';

import ImageComponent from '@/components/shared/ImageComponent/ImageComponent';

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
}) => {
  const router = useRouter();

  const { s: activeItem } = router.query;

  const isActive: boolean = useMemo(() => {
    if (!index && !activeItem) return true;

    return activeItem === id;
  }, [activeItem, index, id]);

  const image: string = useMemo(() => {
    return images ? images[0] || '' : '';
  }, [images]);

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();

    const [asPathUrl, asPathQuery] = router.asPath.split('?');
    const resolvedQuery = getQueryParams(asPathQuery ?? '');

    router.replace(
      {
        pathname: asPathUrl,
        query: { ...resolvedQuery, s: id },
      },
      {
        pathname: asPathUrl,
        query: { ...resolvedQuery, s: id },
      },
      { shallow: true }
    );
  };

  return (
    <button
      className={clsxm(
        'outline-primary-black/10 w-full rounded-lg outline',
        'p-3',
        'focus-visible:ring-primary-blue focus-visible:outline-none focus-visible:ring',
        [isActive && 'outline-primary-blue']
      )}
      onClick={handleClick}
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
            {description}
          </span>

          <span className='text-primary-blue blue-gradient h-max w-max rounded-lg px-3 py-2 text-sm font-semibold xl:text-base'>
            {quantity} {quantity > 1 ? 'Pieces' : 'Piece'}
          </span>
        </span>

        {(!!price || !!substitutes.length) && (
          <span className='text-primary-green border-primary-black/10 h-max w-max rounded-lg border p-2 text-center text-xs font-medium'>
            Price Addded
          </span>
        )}
      </span>
    </button>
  );
};

export default SingleOrderListItem;
