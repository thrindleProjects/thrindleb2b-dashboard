import RecurrentTable from '@/components/lib/recurrentTable/RecurrentTable';

import RecurrentOrdersLayout from '@/layouts/recurrentLayout';
import { NextPageWithLayout } from '@/pages/_app';

const CompletedOrders: NextPageWithLayout = () => {
  return <RecurrentTable title='Completed' />;
};

CompletedOrders.getLayout = function (page) {
  return <RecurrentOrdersLayout>{page}</RecurrentOrdersLayout>;
};
export default CompletedOrders;
