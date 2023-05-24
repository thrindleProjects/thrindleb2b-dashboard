import Image from 'next/image';
import React from 'react';

import Button from '@/components/buttons/Button';
import { WhiteCard } from '@/components/shared/whiteCard';

const CompanyDetailsCard = () => {
  return (
    <WhiteCard className='mt-6 px-10 py-8'>
      <Image
        className='rounded-full'
        src='/assets/svg/critters_logo.svg'
        alt='logo'
        width={80}
        height={80}
      />
      <div className='mt-6 flex items-end justify-between'>
        <div>
          <p className='text-[24px] font-[600]'>Critters Vet</p>
          <p className='text-[16px] '>19, idiroko street, yaba</p>
          <p className='text-[16px] font-[600] '>08109876543, 09043546576</p>
          <p className='text-[16px] '>crittersvet@gmail.com</p>
        </div>
        <Button className='w-[148px]' variant='primary'>
          Make VIP
        </Button>
      </div>
    </WhiteCard>
  );
};

export default CompanyDetailsCard;
