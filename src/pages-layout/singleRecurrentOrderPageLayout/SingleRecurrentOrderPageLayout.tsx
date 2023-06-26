import { useRouter } from 'next/router';
import { ImSpinner2 } from 'react-icons/im';

import SingleRecurrentOrderDetails from '@/components/lib/singleRecurrentOrderDetails';
import SingleRecurrentOrderHeader from '@/components/lib/singleRecurrentOrderHeader';
import PaddedContainer from '@/components/shared/PaddedContainer';

import { useGetRecurrentOrderByIdQuery } from '@/api/orders';

const SingleRecurrentOrderPageLayout: React.FC = () => {
  const { query } = useRouter();

  const { recurrentId } = query;

  const { data, isLoading, error } = useGetRecurrentOrderByIdQuery(
    recurrentId as string,
    {
      skip: !recurrentId,
    }
  );

  return (
    <PaddedContainer>
      {data && !isLoading && !error && (
        <>
          <SingleRecurrentOrderHeader />
          <SingleRecurrentOrderDetails />
        </>
      )}

      {!data && isLoading && !error && (
        <div className='grid h-full w-full place-items-center'>
          <ImSpinner2 className='text-primary-blue animate-spin text-3xl' />
        </div>
      )}
      {!data && !isLoading && !!error && (
        <div className='text-primary-red/80 grid h-full w-full place-items-center text-center text-3xl font-semibold'>
          Something went wrong
        </div>
      )}
    </PaddedContainer>
  );
};

export default SingleRecurrentOrderPageLayout;
