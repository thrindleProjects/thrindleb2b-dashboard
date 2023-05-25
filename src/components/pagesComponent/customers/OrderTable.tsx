import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/buttons/Button';
import Table from '@/components/shared/Table';
import TableBody from '@/components/shared/Table/TableBody';
import TableCell from '@/components/shared/Table/TableCell';
import TableHeader from '@/components/shared/Table/TableHeader';
import TableRow from '@/components/shared/Table/TableRow';
import { WhiteCard } from '@/components/shared/whiteCard';

import { dashboardData } from '@/utils/devData';

const OrderTable = () => {
  const router = useRouter();
  return (
    <WhiteCard className='mt-6 px-10  py-8'>
      <div className='mb-6 flex items-center justify-between'>
        <h6 className='font-clash-grotesk font-medium text-black/60 lg:text-xs xl:text-sm'>
          Recent Orders
        </h6>
        <h6 className='font-clash-grotesk font-medium text-black/60 lg:text-xs xl:text-sm'>
          Pagination
        </h6>
      </div>
      <Table>
        <TableHeader
          items={['#', 'Order ID', 'Item', 'Amount', 'Date', 'Status']}
        />
        <TableBody>
          {dashboardData.map((item, index) => (
            <TableRow
              onClick={() =>
                router.push(`/customers/${router.query.companyId}/${index + 1}`)
              }
              className='cursor-pointer'
              key={index}
            >
              <TableCell>{index + 1}</TableCell>

              <TableCell>{item.orderId}</TableCell>
              <TableCell>{item.item}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>
                <Button className='w-[109px]' variant='primary'>
                  View Order
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </WhiteCard>
  );
};

export default OrderTable;
