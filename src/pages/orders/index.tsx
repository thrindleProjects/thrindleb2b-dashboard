import OrdersTable from '@/components/lib/ordersTable/OrdersTable';

import OrdersLayout from '@/layouts/ordersLayout';
import { NextPageWithLayout } from '@/pages/_app';

const PendingOrders: NextPageWithLayout = () => {
  return <OrdersTable title='Pending' />;
};

PendingOrders.getLayout = function (page) {
  return <OrdersLayout>{page}</OrdersLayout>;
};

export default PendingOrders;
