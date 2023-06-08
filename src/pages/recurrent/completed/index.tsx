import RecurrentTable from '@/components/lib/recurrentTable/RecurrentTable';

import RecurrentOrdersLayout from '@/layouts/recurrentLayout';
import { NextPageWithLayout } from '@/pages/_app';

const CompletedRecurrentOrders: NextPageWithLayout = () => {
  return <RecurrentTable title='Completed' />;
};

CompletedRecurrentOrders.getLayout = function (page) {
  return <RecurrentOrdersLayout>{page}</RecurrentOrdersLayout>;
};
export default CompletedRecurrentOrders;
