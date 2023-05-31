import RequestedOrderTable from '@/components/lib/requestedOrderTable/RequestedOrderTable';

import OrdersLayout from '@/layouts/ordersLayout/OrdersLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { orders } from '@/pages/orders';

const RequestedOrders: NextPageWithLayout = () => {
  return <RequestedOrderTable orders={orders} />;
};

RequestedOrders.getLayout = function (page) {
  return <OrdersLayout>{page}</OrdersLayout>;
};

export default RequestedOrders;
