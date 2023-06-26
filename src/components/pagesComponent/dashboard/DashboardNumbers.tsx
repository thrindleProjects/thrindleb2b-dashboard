import React from 'react';

import MainError from '@/components/shared/error/MainError';

import { useGetDashboardNumbersQuery } from '@/api/dashboard';
import { getErrorMessage } from '@/utils/networkHandler';
import { dashboardNumbersData } from '@/utils/productionData';

import NumbersCard from './NumbersCard';

const DashboardNumbers = () => {
  const { data, isLoading, isError, error, refetch } =
    useGetDashboardNumbersQuery(null, {
      refetchOnReconnect: true,
      pollingInterval: 900000,
      refetchOnFocus: true,
    });

  return (
    <section className='w-full'>
      {isError && !isLoading && (
        <MainError message={getErrorMessage(error)} retry={refetch} />
      )}

      {!isError && (
        <div className='grid w-full grid-cols-2 gap-5 lg:grid-cols-3'>
          {dashboardNumbersData.map((item, index) => (
            <NumbersCard
              key={index}
              {...item}
              data={data?.data}
              isLoading={isLoading}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default DashboardNumbers;
