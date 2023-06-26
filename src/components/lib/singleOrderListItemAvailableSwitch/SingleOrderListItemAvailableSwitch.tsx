import { Icon } from '@iconify/react';

import clsxm from '@/lib/clsxm';
import logger from '@/lib/logger';

import { GeneralOrderStatus } from '@/@types';
import { useUpdateItemAvailabilityMutation } from '@/api/orders';
import { ListItemType } from '@/api/orders/types';

type SingleOrderListItemAvalilableSwitchProps = Pick<
  ListItemType,
  'id' | 'isAvailable'
> & {
  status: Exclude<GeneralOrderStatus, 'all'>;
};

type SingleOrderListItemAvalilableSwitchType =
  React.FC<SingleOrderListItemAvalilableSwitchProps>;

const SingleOrderListItemAvailableSwitch: SingleOrderListItemAvalilableSwitchType =
  ({ id, isAvailable, status }) => {
    const [updateItem, { isLoading }] = useUpdateItemAvailabilityMutation();

    async function handleUpdateItemAvailability() {
      try {
        await updateItem({
          id,
          payload: { isAvailable: !isAvailable },
        }).unwrap();
      } catch (error) {
        logger(error);
      }
    }

    if (status !== 'requested') {
      return <></>;
    }

    return (
      <div className='flex flex-row items-center justify-between gap-2'>
        <span className='text-primary-black/80 text-xs font-medium xl:text-sm'>
          Is this item available?
        </span>
        <button
          className={clsxm(
            'block aspect-video h-4 rounded-full p-[2px] transition-all duration-500 disabled:bg-opacity-40 lg:h-7 lg:p-1',
            [
              isAvailable && 'bg-primary-blue',
              !isAvailable && 'bg-primary-yellow',
            ]
          )}
          onClick={handleUpdateItemAvailability}
          type='button'
          title='Hide Pin'
          disabled={isLoading}
        >
          <span
            className={clsxm(
              'margin-0 flex aspect-square w-[45%] items-center justify-center rounded-full bg-white text-[0.5em] font-medium transition-all duration-500 xl:text-[0.75em]',
              [
                isAvailable && 'ml-[calc(100%-45%)]',
                !isAvailable && 'mr-[calc(100%-45%)]',
              ]
            )}
          >
            <span
              className={clsxm('transition-all duration-500', [
                isAvailable && 'text-primary-blue rotate-0',
                !isAvailable && 'text-primary-yellow -rotate-180',
              ])}
            >
              <Icon icon='ph:thumbs-up' />
            </span>
          </span>
        </button>
      </div>
    );
  };

export default SingleOrderListItemAvailableSwitch;
