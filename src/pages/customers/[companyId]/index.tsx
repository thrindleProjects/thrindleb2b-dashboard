import React from 'react';

import CompanyDetailsCard from '@/components/pagesComponent/customers/CompanyDetailsCard';
import OrderTable from '@/components/pagesComponent/customers/OrderTable';
import PaddedContainer from '@/components/shared/PaddedContainer/PaddedContainer';

const CompanyId = () => {
  return (
    <PaddedContainer>
      <div>
        <p className='font-clash-grotesk font-medium text-black/60 lg:text-xs xl:text-sm'>
          Customers <span className='text-black'>/ Critters Veterinary</span>
        </p>
      </div>
      <CompanyDetailsCard />
      <OrderTable />
    </PaddedContainer>
  );
};

export default CompanyId;
