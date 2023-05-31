import RecurrentOrderTable from '@/components/lib/recurrentOrderTable/RecurrentOrderTable';

import OrdersLayout from '@/layouts/ordersLayout/OrdersLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { orders } from '@/pages/orders';

const RecurrentOrders: NextPageWithLayout = () => {
  return <RecurrentOrderTable orders={orders} />;
};

RecurrentOrders.getLayout = function (page) {
  return <OrdersLayout>{page}</OrdersLayout>;
};

export default RecurrentOrders;
