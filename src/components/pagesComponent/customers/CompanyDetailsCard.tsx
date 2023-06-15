import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-hot-toast';
import { MdVerified } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import SpinnerLoader from '@/components/lib/loader/Loader';
import { WhiteCard } from '@/components/shared/whiteCard';

import {
  useGetCompanyDetailsQuery,
  useMakeCompanyVipMutation,
} from '@/api/customers';
import { IMAGE_BASE_URL } from '@/constant';

const CompanyDetailsCard = () => {
  const [makeVip, { isLoading }] = useMakeCompanyVipMutation();
  const router = useRouter();
  const {
    data,
    isLoading: detailsLoading,
    isError,
  } = useGetCompanyDetailsQuery(router.query.companyId);

  const makeVipHandler = () => {
    makeVip({
      id: router.query.companyId,
      isVIP: true,
    })
      .unwrap()
      .then((res) => {
        toast.success(res.message);
      })
      .catch(() => {
        toast.error('An Error occurred');
      });
  };
  return (
    <WhiteCard className='mt-6 px-10 py-8'>
      {detailsLoading && !isError && <SpinnerLoader type='fullScreen' />}
      {!detailsLoading && !isError && data && (
        <>
          <div className='relative h-[80px] w-[80px]'>
            <Image
              className='rounded-full'
              src={`${IMAGE_BASE_URL}/${data?.data.logo}`}
              alt='logo'
              fill={true}
            />
          </div>
          <div className='mt-6 flex items-end justify-between'>
            <div>
              <p className='text-[24px] font-[600]'>
                {data?.data.companyName ? data?.data.companyName : 'N/A'}
              </p>
              <p className='text-[16px] '>
                {data?.data.address ? data?.data.address : 'N/A'}
              </p>
              <p className='text-[16px] font-[600] '>
                {data?.data.contactPhone ? data?.data.contactPhone : 'N/A'},{' '}
                {data?.data.alternateContactPhone
                  ? data?.data.alternateContactPhone
                  : 'N/A'}
              </p>
              <p className='text-[16px] '>
                {data?.data.email ? data?.data.email : 'N/A'}
              </p>
            </div>
            {data?.data.isVIP ? (
              <div className='flex h-[56px] w-[215px] items-center justify-center gap-5 rounded-full bg-[#ebfcec]'>
                <MdVerified className='text-primary-green h-[21px] w-[21px]' />
                <p className='text-primary-green text-[16px] font-[600]'>
                  VIP Customer
                </p>
              </div>
            ) : (
              <Button
                isLoading={isLoading}
                onClick={makeVipHandler}
                className='w-[148px]'
                variant='primary'
              >
                Make VIP
              </Button>
            )}
          </div>
        </>
      )}
    </WhiteCard>
  );
};

export default CompanyDetailsCard;
