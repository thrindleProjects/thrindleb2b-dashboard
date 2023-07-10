import { useRouter } from 'next/router';
import React, { useState } from 'react';

import {
  DashboardNumbers,
  DashboardTable,
} from '@/components/pagesComponent/dashboard';
import DashboardRecurrentTable from '@/components/pagesComponent/dashboard/DashboardRecurrentTable';
import PaddedContainer from '@/components/shared/PaddedContainer/PaddedContainer';
import DashboardHeaderOrderTab from '@/components/shared/statusTab/DashboardHeaderOrderTab';

import { orderHeaderType } from '@/@types';
import { getQueryParams } from '@/utils/functions';

const DashboardLayout = () => {
  const [activeHeader, setActiveHeader] = useState<orderHeaderType>('recent');
  const { asPath, push } = useRouter();

  const changeTab = (val: orderHeaderType) => {
    setActiveHeader(val);
    const [asPathUrl, asPathQuery] = asPath.split('?');
    const resolvedQuery = getQueryParams(asPathQuery ?? '');

    push({
      pathname: asPathUrl,
      query: { ...resolvedQuery, page: 1 },
    });
  };
  return (
    <PaddedContainer>
      <DashboardNumbers />

      <DashboardHeaderOrderTab activeTab={activeHeader} changeTab={changeTab} />
      {activeHeader === 'recent' && <DashboardTable />}
      {activeHeader === 'recurrent' && <DashboardRecurrentTable />}
    </PaddedContainer>
  );
};

export default DashboardLayout;
