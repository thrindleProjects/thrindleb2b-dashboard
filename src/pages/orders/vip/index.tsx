import OrdersTable from '@/components/lib/ordersTable/OrdersTable';

import OrdersLayout from '@/layouts/ordersLayout/OrdersLayout';
import { NextPageWithLayout } from '@/pages/_app';

const VipOrders: NextPageWithLayout = () => {
  return <OrdersTable title='VIP' />;
};

VipOrders.getLayout = function (page) {
  return <OrdersLayout>{page}</OrdersLayout>;
};

export default VipOrders;
