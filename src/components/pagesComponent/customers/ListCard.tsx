import Image from 'next/image';
import React, { useState } from 'react';

import { BorderedContainer } from '@/components/shared/borderedContainer';

import { listData } from '@/utils/devData';

const ListCard = () => {
  const [active, setActive] = useState(0);
  return (
    <div className='mt-6'>
      {listData.map((item, index) => (
        <BorderedContainer
          onClick={() => setActive(index)}
          className={`mt-6 cursor-pointer rounded-[8px] p-6 ${
            active === index ? 'border-primary-blue' : ''
          }`}
          key={index}
        >
          <div className='flex justify-between '>
            <div className=' w-[60%] '>
              <div className='flex gap-4'>
                <Image
                  alt='image'
                  src='/assets/svg/chair.svg'
                  width={40}
                  height={40}
                />
                <div>
                  <p className='text-[16px] font-[500]'>{item.name}</p>
                  <p className='text-[14px] font-[300] text-black/60'>
                    {item.date}
                  </p>
                </div>
              </div>

              <p className='mt-2 text-[12px] font-[500] text-black/60 '>
                {item.desc}
              </p>
              <p className='text-primary-blue mt-2 w-max rounded-[8px] bg-[#ebf2f9] p-3 text-[16px] font-[600]'>
                {item.quantity}
              </p>
            </div>
            <BorderedContainer className='h-max rounded-lg  p-2'>
              <p className='text-primary-green text-[12px] font-[500]'>
                {item.status}
              </p>
            </BorderedContainer>
          </div>
        </BorderedContainer>
      ))}
    </div>
  );
};

export default ListCard;
