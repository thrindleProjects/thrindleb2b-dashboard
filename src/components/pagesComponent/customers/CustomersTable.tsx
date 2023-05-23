import Image from 'next/image';
import React from 'react';

import Table from '@/components/shared/Table';
import TableBody from '@/components/shared/Table/TableBody';
import TableCell from '@/components/shared/Table/TableCell';
import TableHeader from '@/components/shared/Table/TableHeader';
import TableRow from '@/components/shared/Table/TableRow';
import { WhiteCard } from '@/components/shared/whiteCard';

import { mockData } from '@/utils/devData';

const CustomersTable = () => {
  return (
    <WhiteCard className='mt-6 px-10  py-8'>
      <div className='mb-6 flex items-center justify-between'>
        <h6 className='font-clash-grotesk font-medium text-black/60 lg:text-xs xl:text-sm'>
          Total Customer
        </h6>
        <h6 className='font-clash-grotesk font-medium text-black/60 lg:text-xs xl:text-sm'>
          Pagination
        </h6>
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
        <TableBody>
          {mockData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Image
                  className='rounded-full'
                  src='/assets/svg/critters_logo.svg'
                  alt='logo'
                  width={40}
                  height={40}
                />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.altPhone}</TableCell>
              <TableCell>{item.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </WhiteCard>
  );
};

export default CustomersTable;
