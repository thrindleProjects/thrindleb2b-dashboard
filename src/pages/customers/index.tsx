import { NextPage } from 'next';

import PaddedContainer from '@/components/shared/PaddedContainer';

import CustomersLayout from '@/layouts/customers/CustomersLayout';

const Customers: NextPage = () => {
  return (
    <PaddedContainer>
      <CustomersLayout />
    </PaddedContainer>
  );
};

export default Customers;
