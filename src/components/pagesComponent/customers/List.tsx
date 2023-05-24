import React from 'react';

import { WhiteCard } from '@/components/shared/whiteCard';

import ListCard from './ListCard';

const List = () => {
  return (
    <WhiteCard className='h-[600px]  w-[49%] overflow-y-auto px-6'>
      <p className='text-[18px] font-[500]'>My List</p>
      <hr className='mt-2' />
      <ListCard />
    </WhiteCard>
  );
};

export default List;
