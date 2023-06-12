import React from 'react';

import Button from '@/components/buttons/Button';
import { WhiteCard } from '@/components/shared/whiteCard';

import { SingleOrder } from '@/api/orders/types';

export interface IOrder {
  data: SingleOrder | undefined;
}

const OrderDetailsCard: React.FC<IOrder> = ({ data }) => {
  return (
    <WhiteCard className='mt-6 px-10 py-8'>
      <div className='mt-6 flex items-center justify-between'>
        <div>
          <p className='text-[24px] font-[600]'>{data?.orderRefCode}</p>
          <p className='mt-2 text-[16px] '>{data?.company.companyName}</p>
          <p className='mt-2 text-[16px] font-[500] '>
            {data?.listItems.length} Items
          </p>
          <p className='mt-2 text-[16px] '>Total Amount</p>
          <p className='mt-2 text-[16px] font-[600] '>
            N {data?.paymentTotal.toLocaleString()}.00
          </p>
        </div>
        <Button className='w-[190px]' variant='primary'>
          Send Price List
        </Button>
      </div>
    </WhiteCard>
  );
};

export default OrderDetailsCard;
