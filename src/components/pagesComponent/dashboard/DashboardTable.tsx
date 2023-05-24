import React, { useState } from 'react';

import { TabContainer } from '@/components/shared/statusTab';
import { WhiteCard } from '@/components/shared/whiteCard';

import { orderStatus } from '@/@types/appTypes';
import { dashboardData } from '@/utils/devData';
import { dashboardTableHeaderData } from '@/utils/productionData';

const DashboardTable = () => {
  const [activeTab, setActiveTab] = useState<orderStatus>('all');

  const changeTab = (val: orderStatus) => {
    setActiveTab(val);
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
        <div className='mt-10 w-full'>
          <table className='w-full'>
            <thead className='mb-20 w-full text-left'>
              <tr>
                {dashboardTableHeaderData.map((item, index) => (
                  <td
                    className='font-clash-grotesk text-left text-base font-medium text-black/60'
                    key={index}
                  >
                    {item}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody className=' w-full text-left'>
              {dashboardData.map((item, index) => (
                <tr key={index} className='w-full py-10'>
                  <td className='font-clash-grotesk text-sm font-medium text-black/60'>
                    {item?.orderId}
                  </td>
                  <td className='font-clash-grotesk text-sm font-medium text-black/60'>
                    {item?.orderId}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </WhiteCard>
    </section>
  );
};

export default DashboardTable;
