import CompletedOrderTable from '@/components/lib/completedOrderTable';

import OrdersLayout from '@/layouts/ordersLayout/OrdersLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { orders } from '@/pages/orders';

const CompletedOrders: NextPageWithLayout = () => {
  return <CompletedOrderTable orders={orders} />;
};

CompletedOrders.getLayout = function (page) {
  return <OrdersLayout>{page}</OrdersLayout>;
};
export default CompletedOrders;
