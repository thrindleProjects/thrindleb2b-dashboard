import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { useDisclosure } from '@/hooks';

import SingleRecurrentOrderSuggestedItemList from '@/components/lib/singleRecurrentOrderSuggestedItemList';
import SingleRecurrentOrderSuggestedItemModal from '@/components/lib/singleRecurrentOrderSuggstedItemModal';

import { useGetRecurrentOrderByIdQuery } from '@/api/orders';
import { RecurrentOrderListItemType } from '@/api/orders/types';
import { getQueryParams } from '@/utils/functions';

interface SingleRecurrentOrderSuggestOptionsProps {
  id: string;
}

type SingleRecurrentOrderSuggestedOptionsType =
  React.FC<SingleRecurrentOrderSuggestOptionsProps>;

const SingleRecurrentOrderSuggestedOptions: SingleRecurrentOrderSuggestedOptionsType =
  ({ id }) => {
    const router = useRouter();

    const { isOpen, open, close } = useDisclosure({
      onOpen: handleOnOpen,
      onClose: handleOnClose,
    });

    const { recurrentId, itemId } = router.query;

    const { data } = useGetRecurrentOrderByIdQuery(recurrentId as string, {
      skip: !recurrentId,
      refetchOnFocus: false,
      refetchOnMountOrArgChange: false,
    });

    const substitutes: RecurrentOrderListItemType['substitutes'] =
      useMemo(() => {
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

    function handleOnOpen() {
      if (router.isReady) {
        const [asPathUrl, asPathQuery] = router.asPath.split('?');
        const resolvedQuery = getQueryParams(asPathQuery || '');

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
      }
    }

    function handleOnClose() {
      if (router.isReady) {
        const [asPathUrl, asPathQuery] = router.asPath.split('?');
        const resolvedQuery = getQueryParams(asPathQuery || '');

        delete resolvedQuery.itemId;

        router.replace(
          {
            pathname: asPathUrl,
            query: { ...resolvedQuery },
          },
          {
            pathname: asPathUrl,
            query: { ...resolvedQuery },
          },
          { shallow: true }
        );
      }
    }

    return (
      <div>
        {!substitutes.length && (
          <button
            onClick={open}
            className='text-primary-blue before:bg-primary-blue relative py-px text-sm font-medium before:absolute before:left-0 before:top-full before:h-[2px] before:w-0 before:rounded-full before:transition-all before:duration-500 focus-within:outline-none focus-within:before:w-full hover:before:w-full xl:text-sm'
          >
            Add Suggested Options
          </button>
        )}

        {!!substitutes.length && (
          <div className='flex flex-col gap-3'>
            <section className='flex items-center justify-between'>
              <h5 className='text-primary-black text-base font-semibold xl:text-lg'>
                Suggested Options
              </h5>

              <button
                onClick={open}
                className='text-primary-blue before:bg-primary-blue relative py-px text-sm font-medium before:absolute before:left-0 before:top-full before:h-[2px] before:w-0 before:rounded-full before:transition-all before:duration-500 focus-within:outline-none focus-within:before:w-full hover:before:w-full xl:text-sm'
              >
                Edit Details
              </button>
            </section>

            <SingleRecurrentOrderSuggestedItemList />
          </div>
        )}

        <SingleRecurrentOrderSuggestedItemModal isOpen={isOpen} close={close} />
      </div>
    );
  };

export default SingleRecurrentOrderSuggestedOptions;
