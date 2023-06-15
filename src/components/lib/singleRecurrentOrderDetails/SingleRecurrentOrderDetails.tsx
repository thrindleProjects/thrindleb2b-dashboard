import SingleRecurrentOrderControls from '@/components/lib/singleRecurrentOrderControls';
import SingleRecurrentOrderList from '@/components/lib/singleRecurrentOrderList';

const SingleRecurrentOrderDetails: React.FC = () => {
  return (
    <div className='mt-8 grid h-[calc(100vh-10rem)] min-h-[40rem] w-full grid-cols-2 grid-rows-1 gap-4'>
      <SingleRecurrentOrderList />
      <SingleRecurrentOrderControls />
    </div>
  );
};

export default SingleRecurrentOrderDetails;
