import SingleRecurrentOrderControls from '@/components/lib/singleRecurrentOrderControls';
import SingleRecurrentOrderList from '@/components/lib/singleRecurrentOrderList';

const SingleRecurrentOrderDetails: React.FC = () => {
  return (
    <div className='mt-8 grid min-h-[40rem] w-full grid-cols-1 grid-rows-1 gap-4 lg:h-[calc(100vh-10rem)] lg:grid-cols-2'>
      <SingleRecurrentOrderList />
      <SingleRecurrentOrderControls />
    </div>
  );
};

export default SingleRecurrentOrderDetails;
