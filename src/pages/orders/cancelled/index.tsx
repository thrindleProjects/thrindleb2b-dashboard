import OrdersTable from '@/components/lib/ordersTable/OrdersTable';

import OrdersLayout from '@/layouts/ordersLayout/OrdersLayout';
import { NextPageWithLayout } from '@/pages/_app';

const CancelledOrders: NextPageWithLayout = () => {
  return <OrdersTable title='Cancelled' />;
};

CancelledOrders.getLayout = function (page) {
  return <OrdersLayout>{page}</OrdersLayout>;
};
export default CancelledOrders;
