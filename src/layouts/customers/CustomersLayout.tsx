import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

import SpinnerLoader from '@/components/lib/loader/Loader';
import { BarChart } from '@/components/pagesComponent/customers/BarChart';
import CustomersTable from '@/components/pagesComponent/customers/CustomersTable';
import TopSection from '@/components/pagesComponent/customers/TopSection';

import { useGetAllCustomersQuery } from '@/api/customers';

const CustomersLayout = () => {
  const router = useRouter();
  const { query } = router;
  const { page } = query;
  const currentPage: number = useMemo(() => Number(page) || 1, [page]);
  const { data, isLoading, isError } = useGetAllCustomersQuery(
    {
      page: currentPage,
      limit: 10,
    },
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
    }
  );
  return (
    <>
      <div className='flex gap-4'>
        <TopSection data={data?.data} />
        <BarChart />
      </div>
      {isLoading && !isError && <SpinnerLoader type='fullScreen' />}
      {!isLoading && !isError && data?.data.data.length === 0 && (
        <div className='p-40 text-center text-xl font-bold'>
          Nothing to see here
        </div>
      )}
      {!data && !isLoading && !!isError && (
        <div className='text-primary-red/80  p-40 text-center text-3xl font-semibold'>
          Something went wrong!
        </div>
      )}
      {!isLoading && !isError && data && data.data.data.length > 0 && (
        <CustomersTable data={data?.data} loading={isLoading} error={isError} />
      )}
    </>
  );
};

export default CustomersLayout;
