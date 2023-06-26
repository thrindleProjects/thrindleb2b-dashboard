import RecurrentTable from '@/components/lib/recurrentTable/RecurrentTable';

import RecurrentOrdersLayout from '@/layouts/recurrentLayout/RecurrentLayout';
import { NextPageWithLayout } from '@/pages/_app';

const RequestedRecurrentOrders: NextPageWithLayout = () => {
  return <RecurrentTable title='Requested' />;
};

RequestedRecurrentOrders.getLayout = function (page) {
  return <RecurrentOrdersLayout>{page}</RecurrentOrdersLayout>;
};

export default RequestedRecurrentOrders;
