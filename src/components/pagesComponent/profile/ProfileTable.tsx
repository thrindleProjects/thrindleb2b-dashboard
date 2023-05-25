import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/buttons/Button';
import Table from '@/components/shared/Table';
import TableBody from '@/components/shared/Table/TableBody';
import TableCell from '@/components/shared/Table/TableCell';
import TableHeader from '@/components/shared/Table/TableHeader';
import TableRow from '@/components/shared/Table/TableRow';
import { WhiteCard } from '@/components/shared/whiteCard';

import { profileTableData } from '@/utils/devData';

const ProfileTable = () => {
  const router = useRouter();
  return (
    <WhiteCard className='mt-6 px-10  py-8'>
      <div className='mb-6 flex items-center justify-between'>
        <h6 className='font-clash-grotesk font-medium text-black/60 lg:text-xs xl:text-sm'>
          Users
        </h6>
        <Button className='w-[153px]'>Add New User</Button>
      </div>
      <Table>
        <TableHeader
          items={[
            '#',
            'Name',
            'Role',
            'Email Address',
            ' Phone Number',
            'Action',
          ]}
        />
        <TableBody>
          {profileTableData.map((item, index) => (
            <TableRow
              onClick={() => router.push(`/customers/${index + 1}`)}
              className='cursor-pointer'
              key={index}
            >
              <TableCell>{index + 1}</TableCell>

              <TableCell>{item.name}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>
                <div className='flex items-center gap-3 text-black/60'>
                  <div className='flex items-center gap-1'>
                    <Icon
                      icon='wpf:edit'
                      className='text-primary-blue text-sm'
                    />
                    <p>Edit</p>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Icon
                      icon='clarity:remove-solid'
                      className='text-primary-red text-sm'
                    />
                    <p>Remove</p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className='mt-6 text-right'>Pagination</p>
    </WhiteCard>
  );
};

export default ProfileTable;
