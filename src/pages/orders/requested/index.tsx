import OrdersTable from '@/components/lib/ordersTable';

import OrdersLayout from '@/layouts/ordersLayout/OrdersLayout';
import { NextPageWithLayout } from '@/pages/_app';

const RequestedOrders: NextPageWithLayout = () => {
  return <OrdersTable title='Requested' />;
};

RequestedOrders.getLayout = function (page) {
  return <OrdersLayout>{page}</OrdersLayout>;
};

export default RequestedOrders;
