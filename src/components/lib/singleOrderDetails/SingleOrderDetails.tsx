import SingleOrderControls from '@/components/lib/singleOrderControls';
import SingleOrderList from '@/components/lib/singleOrderList';

const SingleOrderDetails = () => {
  return (
    <div className='mt-8 grid h-[calc(100vh-10rem)] min-h-[40rem] w-full grid-cols-2 grid-rows-1 gap-4'>
      <SingleOrderList />
      <SingleOrderControls />
    </div>
  );
};

export default SingleOrderDetails;
