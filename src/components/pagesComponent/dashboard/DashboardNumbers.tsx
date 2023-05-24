import React from 'react';

import { dashboardNumbersData } from '@/utils/devData';

import NumbersCard from './NumbersCard';

const DashboardNumbers = () => {
  return (
    <section className='grid w-full grid-cols-2 gap-5 lg:grid-cols-3'>
      {dashboardNumbersData.map((item, index) => (
        <NumbersCard key={index} {...item} />
      ))}
    </section>
  );
};

export default DashboardNumbers;
