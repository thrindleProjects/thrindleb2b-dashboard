import OrdersTable from '@/components/lib/ordersTable/OrdersTable';

import OrdersLayout from '@/layouts/ordersLayout/OrdersLayout';
import { NextPageWithLayout } from '@/pages/_app';

const CompletedOrders: NextPageWithLayout = () => {
  return <OrdersTable title='Completed' />;
};

CompletedOrders.getLayout = function (page) {
  return <OrdersLayout>{page}</OrdersLayout>;
};
export default CompletedOrders;
