import Image from 'next/image';
import React from 'react';

import { WhiteCard } from '@/components/shared/whiteCard';

const CardDetails = () => {
  return (
    <WhiteCard className='w-[49%]  px-6'>
      <p className='text-[16px] font-[500]'>Office Chairs</p>
      <div className='mt-10 flex gap-4'>
        {[1, 2, 3].map((_, index) => (
          <Image
            className='rounded-[8px]'
            key={index}
            alt='image'
            src='/assets/svg/chair.svg'
            width={127}
            height={127}
          />
        ))}
      </div>
      <div className='mt-5'>
        <p className='text-[16px] font-[600]'>Office Chairs</p>
        <p className='w-[60%] text-[14px] text-black/60'>
          Lorem ipsum dolor sit amet consectetur. Viverra dictum sagittis turpis
          senectus. Proin tellus nibh
        </p>
        <p className='mt-6 text-[16px] font-[600]'>500 pieces</p>
        {/* input will be here */}
      </div>
    </WhiteCard>
  );
};

export default CardDetails;
