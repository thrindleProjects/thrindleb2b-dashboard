import React from 'react';

import CardDetails from '@/components/pagesComponent/customers/CardDetails';
import List from '@/components/pagesComponent/customers/List';
import OrderDetailsCard from '@/components/pagesComponent/customers/OrderDetailsCard';
import PaddedContainer from '@/components/shared/PaddedContainer/PaddedContainer';

const OrderId = () => {
  return (
    <PaddedContainer>
      <div>
        <p className='font-clash-grotesk font-medium text-black/60 lg:text-xs xl:text-sm'>
          Customers / Critters Veterinary{' '}
          <span className='text-black'>/ Order #45465</span>
        </p>
      </div>
      <OrderDetailsCard />
      <div className='mt-8 flex justify-between'>
        <List />
        <CardDetails />
      </div>
    </PaddedContainer>
  );
};

export default OrderId;
