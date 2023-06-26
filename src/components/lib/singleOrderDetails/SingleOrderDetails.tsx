import SingleOrderControls from '@/components/lib/singleOrderControls';
import SingleOrderList from '@/components/lib/singleOrderList';

const SingleOrderDetails: React.FC = () => {
  return (
    <div className='mt-8 grid min-h-[40rem] w-full grid-cols-1 grid-rows-1 gap-4 lg:h-[calc(100vh-10rem)] lg:grid-cols-2'>
      <SingleOrderList />
      <SingleOrderControls />
    </div>
  );
};

export default SingleOrderDetails;
