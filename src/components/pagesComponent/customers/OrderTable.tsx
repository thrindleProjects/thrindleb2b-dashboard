import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/buttons/Button';
import Table from '@/components/shared/Table';
import TableBody from '@/components/shared/Table/TableBody';
import TableCell from '@/components/shared/Table/TableCell';
import TableHeader from '@/components/shared/Table/TableHeader';
import TableRow from '@/components/shared/Table/TableRow';
import { WhiteCard } from '@/components/shared/whiteCard';

import { ICompanyOrderData } from '@/api/customers/type';

import { formatDate } from '../../../utils/functions/formatDate';

export interface IOrderTable {
  data: ICompanyOrderData[] | undefined;
}

const OrderTable: React.FC<IOrderTable> = ({ data }) => {
  const router = useRouter();
  return (
    <WhiteCard className='mt-6 px-10  py-8'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='font-clash-grotesk  text-xl font-bold text-black/60 '>
          Total Orders
        </h2>
        <h6 className='font-clash-grotesk font-medium text-black/60 lg:text-xs xl:text-sm'>
          Pagination
        </h6>
      </div>
      <Table>
        <TableHeader
          items={['#', 'Order ID', 'Items', 'Amount', 'Date', 'Status']}
        />
        <TableBody>
          {data &&
            data.map((item, index) => (
              <TableRow
                onClick={() =>
                  router.push(`/customers/${router.query.companyId}/${item.id}`)
                }
                className='cursor-pointer'
                key={index}
              >
                <TableCell>{index + 1}</TableCell>

                <TableCell>{item.orderRefCode}</TableCell>
                <TableCell>{item.listItems.length}</TableCell>
                <TableCell>{item.paymentTotal}</TableCell>
                <TableCell>{formatDate(item.createdAt)}</TableCell>
                <TableCell>
                  <p className='capitalize'>{item.orderStatus}</p>
                </TableCell>
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
