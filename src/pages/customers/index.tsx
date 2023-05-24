import { NextPage } from 'next';

import CustomersLayout from '@/components/layout/pages-layout/customers/CustomersLayout';
import PaddedContainer from '@/components/shared/PaddedContainer';

const Customers: NextPage = () => {
  return (
    <PaddedContainer>
      <CustomersLayout />
    </PaddedContainer>
  );
};

export default Customers;
