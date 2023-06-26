import RecurrentTable from '@/components/lib/recurrentTable/RecurrentTable';

import RecurrentOrdersLayout from '@/layouts/recurrentLayout/RecurrentLayout';
import { NextPageWithLayout } from '@/pages/_app';

const PendingRecurrentOrders: NextPageWithLayout = () => {
  return <RecurrentTable title='Pending' />;
};

PendingRecurrentOrders.getLayout = function (page) {
  return <RecurrentOrdersLayout>{page}</RecurrentOrdersLayout>;
};

export default PendingRecurrentOrders;
