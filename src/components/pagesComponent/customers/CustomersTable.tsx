import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import SpinnerLoader from '@/components/lib/loader/Loader';
import Pagination from '@/components/shared/Pagination/Pagination';
import Table from '@/components/shared/Table';
import TableBody from '@/components/shared/Table/TableBody';
import TableCell from '@/components/shared/Table/TableCell';
import TableHeader from '@/components/shared/Table/TableHeader';
import TableRow from '@/components/shared/Table/TableRow';
import { WhiteCard } from '@/components/shared/whiteCard';

import { Company } from '@/@types';
import { GetOrdersResponse } from '@/api/orders/types';
import { IMAGE_BASE_URL } from '@/constant';

export interface ICustomers {
  data: GetOrdersResponse<Company> | undefined;
  loading?: boolean;
  error?: boolean;
}

const CustomersTable: React.FC<ICustomers> = ({ data, error, loading }) => {
  const router = useRouter();

  if (loading && !error) {
    return <SpinnerLoader type='fullScreen' />;
  }

  return (
    <WhiteCard className='mt-6 px-10  py-8'>
      <div className='mb-6 flex items-center justify-between'>
        <h4 className='font-clash-grotesk font-medium text-black/60 '>
          Total Customers
        </h4>
        <div>
          <Pagination count={data?.lastpage || 1} />
        </div>
      </div>
      <Table>
        <TableHeader
          items={[
            '#',
            'Logo',
            'Customer Name',
            'Alternate Phone Number',
            ' Phone Number',
            'Email Address',
          ]}
        />
        {!data && !loading && error && (
          <div className='text-primary-red/80 my-20  text-center text-3xl font-semibold'>
            An Error Occurred!
          </div>
        )}
        <TableBody>
          {!loading &&
            !error &&
            data?.data.map((item, index) => (
              <TableRow
                onClick={() => router.push(`/customers/${item.id}`)}
                className='cursor-pointer'
                key={index}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <div className='relative h-[40px] w-[40px]'>
                    <Image
                      className='rounded-full'
                      src={`${IMAGE_BASE_URL}/${item.logo}`}
                      alt='logo'
                      fill
                    />
                  </div>
                </TableCell>
                <TableCell>{item.companyName}</TableCell>
                <TableCell>
                  {item.contactPhone ? item.contactPhone : 'N/A'}
                </TableCell>
                <TableCell>
                  {item.alternateContactPhone
                    ? item.alternateContactPhone
                    : 'N/A'}
                </TableCell>
                <TableCell>{item.email}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </WhiteCard>
  );
};

export default CustomersTable;
