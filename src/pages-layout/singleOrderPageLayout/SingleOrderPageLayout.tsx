import { useRouter } from 'next/router';
import { ImSpinner2 } from 'react-icons/im';

import SingleOrderDetails from '@/components/lib/singleOrderDetails/SingleOrderDetails';
import SingleOrderHeader from '@/components/lib/singleOrderHeader/SingleOrderHeader';
import PaddedContainer from '@/components/shared/PaddedContainer';

import { useGetOrderByIdQuery } from '@/api/orders';

const SingleOrderPageLayout: React.FC = () => {
  const { query } = useRouter();

  const { orderId } = query;

  const { data, isLoading, error } = useGetOrderByIdQuery(orderId as string, {
    skip: !orderId,
  });

  return (
    <PaddedContainer>
      {data && !isLoading && !error && data.data && (
        <>
          <SingleOrderHeader />
          <SingleOrderDetails />
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

export default SingleOrderPageLayout;
