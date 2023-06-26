import React from 'react';

import { WhiteCard } from '@/components/shared/whiteCard';
import Skeleton from '@/components/Skeleton';

import { IDashboardNumbers } from '@/@types/appTypes';

const NumbersCard = ({
  title,
  data,
  isLoading,
  slug,
}: {
  title: string;
  value: number;
  data: IDashboardNumbers | undefined;
  isLoading: boolean;
  slug: keyof IDashboardNumbers;
}) => {
  return (
    <WhiteCard className='px-10 py-8'>
      <h6 className='font-clash-grotesk font-medium text-black/60 lg:text-xs xl:text-sm'>
        {title}
      </h6>
      {isLoading && <Skeleton className='mt-5 h-[30px] rounded-md' />}
      {!isLoading && data && (
        <p className='text-primary-blue font-clash-grotesk pt-5 text-4xl font-medium'>
          {data[slug as keyof IDashboardNumbers]}
        </p>
      )}
    </WhiteCard>
  );
};

export default NumbersCard;
