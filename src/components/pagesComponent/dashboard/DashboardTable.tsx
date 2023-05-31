import { useState } from 'react';

import useOrderStatusHook from '@/hooks/useStatusHook';

import { TabContainer } from '@/components/shared/statusTab';
import Table from '@/components/shared/Table';
import TableBody from '@/components/shared/Table/TableBody';
import TableCell from '@/components/shared/Table/TableCell';
import TableHeader from '@/components/shared/Table/TableHeader';
import TableRow from '@/components/shared/Table/TableRow';
import { WhiteCard } from '@/components/shared/whiteCard';

import { orderStatus } from '@/@types/appTypes';
import { dashboardData } from '@/utils/devData';
import { dashboardTableHeaderData } from '@/utils/productionData';

const DashboardTable = () => {
  const [activeTab, setActiveTab] = useState<orderStatus>('all');

  const changeTab = (val: orderStatus) => {
    setActiveTab(val);
  };

  const colorPicker = (status: orderStatus) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useOrderStatusHook({
      orderStatus: status,
    }).orderStyle.textColor;
  };

  return (
    <section className='mt-10 w-full'>
      <WhiteCard>
        {/* Header */}
        <div className='flex w-full flex-row items-center justify-between'>
          <h6 className='font-clash-grotesk text-base font-medium text-black'>
            Recent Orders
          </h6>
          <div className='w-[40%] '>
            <TabContainer
              className='w-full bg-[#F9F9F9]'
              activeTab={activeTab}
              changeTab={changeTab}
            />
          </div>
        </div>
        {/* Table */}
        <div className='mt-5 w-full'>
          <Table>
            <TableHeader items={dashboardTableHeaderData} />
            <TableBody>
              {dashboardData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.orderId}</TableCell>
                  <TableCell>{item.company}</TableCell>
                  <TableCell>{item.item}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>
                    <p className={`${colorPicker(item.status as orderStatus)}`}>
                      {
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        useOrderStatusHook({
                          orderStatus: item.status as orderStatus,
                        }).orderStyle.text
                      }
                    </p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </WhiteCard>
    </section>
  );
};

export default DashboardTable;
