import React from 'react';

import { WhiteCard } from '@/components/shared/whiteCard';

import { Company } from '@/@types';
import { useGetGraphDataQuery } from '@/api/customers';
import { GetOrdersResponse } from '@/api/orders/types';

export interface ICustomers {
  data: GetOrdersResponse<Company> | undefined;
  loading?: boolean;
  error?: boolean;
}

const TopSection: React.FC<ICustomers> = ({ data }) => {
  const { data: graphData } = useGetGraphDataQuery();

  return (
    <div className='w-[30%]'>
      <WhiteCard className='h-[200px] px-10 py-8'>
        <h6 className='font-clash-grotesk font-medium text-black/60 lg:text-xs xl:text-sm'>
          Total Customer
        </h6>
        <p className='text-primary-blue font-clash-grotesk pt-5 text-4xl font-medium'>
          {data?.total}
        </p>
        <p className='text-primary-green font-clash-grotesk pt-5 text-[14px] font-medium'>
          {graphData?.data.percentageIncrease.toFixed(2)}% up from last month
        </p>
      </WhiteCard>
      <WhiteCard className='mt-4 h-[200px] px-10 py-8'>
        <h6 className='font-clash-grotesk font-medium text-black/60 lg:text-xs xl:text-sm'>
          Vip Customers
        </h6>
        <p className='text-primary-blue font-clash-grotesk mt-16 text-4xl font-medium'>
          {data?.totalVIPCustomers}
        </p>
      </WhiteCard>
    </div>
  );
};

export default TopSection;
