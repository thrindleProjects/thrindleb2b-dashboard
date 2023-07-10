import RecurrentTable from '@/components/lib/recurrentTable/RecurrentTable';

import RecurrentOrdersLayout from '@/layouts/recurrentLayout';
import { NextPageWithLayout } from '@/pages/_app';

const CancelledRecurrentOrders: NextPageWithLayout = () => {
  return <RecurrentTable title='Cancelled' />;
};

CancelledRecurrentOrders.getLayout = function (page) {
  return <RecurrentOrdersLayout>{page}</RecurrentOrdersLayout>;
};
export default CancelledRecurrentOrders;
