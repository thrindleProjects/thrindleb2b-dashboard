// import { useRouter } from 'next/router';

// import { useGetRecurrentOrderByIdQuery } from '@/api/orders';
// import { RecurrentOrderListItemType } from '@/api/orders/types';
// import { getQueryParams } from '@/utils/functions';
// import { useDisclosure } from '@/utils/hooks';

interface SingleRecurrentOrderSuggestOptionsProps {
  id: string;
}

type SingleRecurrentOrderSuggestedOptionsType =
  React.FC<SingleRecurrentOrderSuggestOptionsProps>;

const SingleRecurrentOrderSuggestedOptions: SingleRecurrentOrderSuggestedOptionsType =
  () => {
    // const router = useRouter();

    // const { isOpen, open, close } = useDisclosure({
    //   onOpen: handleOnOpen,
    //   onClose: handleOnClose,
    // });

    // const { recurrentId, itemId } = router.query;

    // const { data } = useGetRecurrentOrderByIdQuery(recurrentId as string, {
    //   skip: !recurrentId,
    //   refetchOnFocus: false,
    //   refetchOnMountOrArgChange: false,
    // });

    // const substitutes: RecurrentOrderListItemType['substitutes'] =
    //   useMemo(() => {
    //     if (!data) {
    //       return [];
    //     }

    //     let listItem: RecurrentOrderListItemType | undefined;

    //     if (itemId) {
    //       listItem = data.data.listItems.find((item) => item.id === itemId);
    //     } else {
    //       listItem = data.data.listItems[0];
    //     }

    //     if (!listItem) return [];

    //     return listItem.substitutes;
    //   }, [data, itemId]);

    // function handleOnOpen() {
    //   if (router.isReady) {
    //     const [asPathUrl, asPathQuery] = router.asPath.split('?');
    //     const resolvedQuery = getQueryParams(asPathQuery || '');

    //     router.replace(
    //       {
    //         pathname: asPathUrl,
    //         query: { ...resolvedQuery, itemId: id },
    //       },
    //       {
    //         pathname: asPathUrl,
    //         query: { ...resolvedQuery, itemId: id },
    //       },
    //       { shallow: true }
    //     );
    //   }
    // }

    // function handleOnClose() {
    //   if (router.isReady) {
    //     const [asPathUrl, asPathQuery] = router.asPath.split('?');
    //     const resolvedQuery = getQueryParams(asPathQuery || '');

    //     delete resolvedQuery.itemId;

    //     router.replace(
    //       {
    //         pathname: asPathUrl,
    //         query: { ...resolvedQuery },
    //       },
    //       {
    //         pathname: asPathUrl,
    //         query: { ...resolvedQuery },
    //       },
    //       { shallow: true }
    //     );
    //   }
    // }

    return <div>SingleRecurrentOrderSuggestedOptions</div>;
  };

export default SingleRecurrentOrderSuggestedOptions;
