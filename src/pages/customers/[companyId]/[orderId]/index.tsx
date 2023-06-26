import { useRouter } from 'next/router';
import React, { useState } from 'react';

import SpinnerLoader from '@/components/lib/loader/Loader';
import CardDetails from '@/components/pagesComponent/customers/CardDetails';
import ListCard from '@/components/pagesComponent/customers/ListCard';
import OrderDetailsCard from '@/components/pagesComponent/customers/OrderDetailsCard';
import PaddedContainer from '@/components/shared/PaddedContainer/PaddedContainer';
import { WhiteCard } from '@/components/shared/whiteCard';

import { useGetOrderByIdQuery } from '@/api/orders';

const OrderId = () => {
  const router = useRouter();
  const { data, isLoading } = useGetOrderByIdQuery(
    router.query.orderId as string
  );
  const [active, setActive] = useState('');

  if (isLoading) {
    return <SpinnerLoader type='fullScreen' />;
  }

  return (
    <PaddedContainer>
      <div>
        <p className='font-clash-grotesk font-medium text-black/60 lg:text-xs xl:text-sm'>
          Customers / Critters Veterinary{' '}
          <span className='text-black'>/ Order #45465</span>
        </p>
      </div>
      <OrderDetailsCard data={data?.data} />
      <div className='mt-8 flex justify-between'>
        <WhiteCard className=' h-[600px] w-[48%] overflow-y-auto px-6'>
          <p className='text-[18px] font-[500]'>My List</p>
          <hr className='mt-2' />
          <ListCard active={active} setActive={setActive} />
        </WhiteCard>
        <div className='h-[600px] w-[48%]'>
          <CardDetails active={active} setActive={setActive} />
        </div>
      </div>
    </PaddedContainer>
  );
};

export default OrderId;
