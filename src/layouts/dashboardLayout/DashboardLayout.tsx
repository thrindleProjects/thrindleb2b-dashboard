import React from 'react';

import {
  DashboardNumbers,
  DashboardTable,
} from '@/components/pagesComponent/dashboard';
import PaddedContainer from '@/components/shared/PaddedContainer/PaddedContainer';

const DashboardLayout = () => {
  return (
    <PaddedContainer>
      <DashboardNumbers />
      <DashboardTable />
    </PaddedContainer>
  );
};

export default DashboardLayout;
