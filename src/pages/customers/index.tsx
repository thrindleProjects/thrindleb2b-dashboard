import { NextPage } from 'next';

import PaddedContainer from '@/components/shared/PaddedContainer';

const Customers: NextPage = () => {
  return (
    <PaddedContainer>
      <div className='flex h-full flex-col gap-4'>
        <div className='h-full w-full bg-pink-500'></div>
        <div className='h-full w-full bg-red-500'></div>
        <div className='h-full w-full bg-green-500'></div>
        <div className='h-full w-full bg-yellow-500'></div>
        <div className='h-full w-full bg-blue-500'></div>
        <div className='h-full w-full bg-indigo-500'></div>
      </div>
      <br />
      <div className='h-full w-full bg-pink-500'></div>
      <div className='h-full w-full bg-red-500'></div>
      <div className='h-full w-full bg-green-500'></div>
      <div className='h-full w-full bg-yellow-500'></div>
      <div className='h-full w-full bg-blue-500'></div>
      <div className='h-full w-full bg-indigo-500'></div>
    </PaddedContainer>
  );
};

export default Customers;
