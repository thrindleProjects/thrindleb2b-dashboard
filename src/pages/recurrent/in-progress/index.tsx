import RecurrentTable from '@/components/lib/recurrentTable/RecurrentTable';

import RecurrentOrdersLayout from '@/layouts/recurrentLayout/RecurrentLayout';
import { NextPageWithLayout } from '@/pages/_app';

const InProgressRecurrentOrders: NextPageWithLayout = () => {
  return <RecurrentTable title='In Progress' />;
};

InProgressRecurrentOrders.getLayout = function (page) {
  return <RecurrentOrdersLayout>{page}</RecurrentOrdersLayout>;
};

export default InProgressRecurrentOrders;
