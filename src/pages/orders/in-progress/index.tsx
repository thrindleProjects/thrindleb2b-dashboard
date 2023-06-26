import OrdersTable from '@/components/lib/ordersTable/OrdersTable';

import OrdersLayout from '@/layouts/ordersLayout/OrdersLayout';
import { NextPageWithLayout } from '@/pages/_app';

const InProgressOrders: NextPageWithLayout = () => {
  return <OrdersTable title='In Progress' />;
};

InProgressOrders.getLayout = function (page) {
  return <OrdersLayout>{page}</OrdersLayout>;
};

export default InProgressOrders;
