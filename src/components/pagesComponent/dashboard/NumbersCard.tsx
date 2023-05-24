import React from 'react';

import { WhiteCard } from '@/components/shared/whiteCard';

const NumbersCard = ({ title, value }: { title: string; value: number }) => {
  return (
    <WhiteCard className='px-10 py-8'>
      <h6 className='font-clash-grotesk font-medium text-black/60 lg:text-xs xl:text-sm'>
        {title}
      </h6>
      <p className='text-primary-blue font-clash-grotesk pt-5 text-4xl font-medium'>
        {value}
      </p>
    </WhiteCard>
  );
};

export default NumbersCard;
