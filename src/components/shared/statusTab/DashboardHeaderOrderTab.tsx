import React from 'react';

import { orderHeaderType } from '@/@types';
import { dashboardOrderHeader } from '@/utils/productionData';

import SingleDashboardHeaderType from './SingleDashboardHeaderType';

const DashboardHeaderOrderTab = ({
  className,
  activeTab,
  changeTab,
}: {
  className?: string;
  activeTab: orderHeaderType;
  changeTab: (val: orderHeaderType) => void;
}) => {
  return (
    <div className='mb-5 mt-10 w-full'>
      <div
        className={`h-[60px] rounded-md bg-blue-50 ${className} flex w-[50%]  flex-row items-center justify-between px-3 lg:w-[35%] xl:w-[25%]`}
      >
        {dashboardOrderHeader.map((item, index) => (
          <SingleDashboardHeaderType
            key={index}
            {...item}
            activeTab={activeTab}
            changeTab={() => changeTab(item.slug as orderHeaderType)}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardHeaderOrderTab;
