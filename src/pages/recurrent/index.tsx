import RecurrentTable from '@/components/lib/recurrentTable/RecurrentTable';

import RecurrentOrdersLayout from '@/layouts/recurrentLayout/RecurrentLayout';
import { NextPageWithLayout } from '@/pages/_app';

const PendingOrders: NextPageWithLayout = () => {
  return <RecurrentTable title='Pending' />;
};

PendingOrders.getLayout = function (page) {
  return <RecurrentOrdersLayout>{page}</RecurrentOrdersLayout>;
};

export default PendingOrders;
