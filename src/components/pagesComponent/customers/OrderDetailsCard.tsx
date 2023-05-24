import React from 'react';

import Button from '@/components/buttons/Button';
import { WhiteCard } from '@/components/shared/whiteCard';

const OrderDetailsCard = () => {
  return (
    <WhiteCard className='mt-6 px-10 py-8'>
      <div className='mt-6 flex items-center justify-between'>
        <div>
          <p className='text-[24px] font-[600]'>Order 45465</p>
          <p className='mt-2 text-[16px] '>Critters Vet</p>
          <p className='mt-2 text-[16px] font-[500] '>3 Items</p>
          <p className='mt-2 text-[16px] '>Total Amount</p>
          <p className='mt-2 text-[16px] font-[600] '>#500,000</p>
        </div>
        <Button className='w-[190px]' variant='primary'>
          Send Price List
        </Button>
      </div>
    </WhiteCard>
  );
};

export default OrderDetailsCard;
