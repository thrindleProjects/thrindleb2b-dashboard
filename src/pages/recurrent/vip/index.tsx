import RecurrentTable from '@/components/lib/recurrentTable/RecurrentTable';

import RecurrentOrdersLayout from '@/layouts/recurrentLayout/RecurrentLayout';
import { NextPageWithLayout } from '@/pages/_app';

const VipOrders: NextPageWithLayout = () => {
  return <RecurrentTable title='VIP' />;
};

VipOrders.getLayout = function (page) {
  return <RecurrentOrdersLayout>{page}</RecurrentOrdersLayout>;
};

export default VipOrders;
