import React from 'react';

import { BarChart } from '@/components/pagesComponent/customers/BarChart';
import CustomersTable from '@/components/pagesComponent/customers/CustomersTable';
import TopSection from '@/components/pagesComponent/customers/TopSection';

const CustomersLayout = () => {
  return (
    <>
      <div className='flex gap-4'>
        <TopSection />
        <BarChart />
      </div>
      <CustomersTable />
    </>
  );
};

export default CustomersLayout;
