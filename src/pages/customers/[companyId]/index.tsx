import { useRouter } from 'next/router';
import React from 'react';

import SpinnerLoader from '@/components/lib/loader/Loader';
import CompanyDetailsCard from '@/components/pagesComponent/customers/CompanyDetailsCard';
import OrderTable from '@/components/pagesComponent/customers/OrderTable';
import PaddedContainer from '@/components/shared/PaddedContainer/PaddedContainer';

import { useGetCompanyOrdersQuery } from '@/api/customers';

const CompanyId = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useGetCompanyOrdersQuery(
    router.query.companyId
  );

  return (
    <PaddedContainer>
      <div>
        <p className='font-clash-grotesk font-medium text-black/60 lg:text-xs xl:text-sm'>
          Customers <span className='text-black'>/ Critters Veterinary</span>
        </p>
      </div>
      <CompanyDetailsCard />

      {isLoading && !isError && <SpinnerLoader type='fullScreen' />}
      {!isLoading && !isError && data && data?.data?.length === 0 && (
        <div className='p-40 text-center text-xl font-bold'>
          Nothing to see here
        </div>
      )}
      {!data && !isLoading && !!isError && (
        <div className='text-primary-red/80  p-40 text-center text-3xl font-semibold'>
          Something went wrong!
        </div>
      )}

      {!isLoading && !isError && data && data?.data.length > 0 && (
        <>
          <OrderTable data={data?.data} />
        </>
      )}
    </PaddedContainer>
  );
};

export default CompanyId;
