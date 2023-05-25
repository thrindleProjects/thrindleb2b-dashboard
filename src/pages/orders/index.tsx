import PendingOrderTable from '@/components/lib/pendingOrderTable';

import OrdersLayout from '@/layouts/ordersLayout';
import { NextPageWithLayout } from '@/pages/_app';

export type SingleOrder = {
  id: number;
  orderId: string;
  companyName: string;
  quantity: number;
  amount: number;
  phoneNumber: string;
  date: string;
};

export const orders: SingleOrder[] = [
  {
    id: 1,
    orderId: '#45465',
    companyName: 'Critters Vet',
    quantity: 6,
    amount: 50000,
    phoneNumber: '08109876543',
    date: new Date().toISOString(),
  },
  {
    id: 2,
    orderId: '#45465',
    companyName: 'Critters Vet',
    quantity: 6,
    amount: 50000,
    phoneNumber: '08109876543',
    date: new Date().toISOString(),
  },
  {
    id: 3,
    orderId: '#45465',
    companyName: 'Critters Vet',
    quantity: 6,
    amount: 50000,
    phoneNumber: '08109876543',
    date: new Date().toISOString(),
  },
  {
    id: 4,
    orderId: '#45465',
    companyName: 'Critters Vet',
    quantity: 6,
    amount: 50000,
    phoneNumber: '08109876543',
    date: new Date().toISOString(),
  },
  {
    id: 5,
    orderId: '#45465',
    companyName: 'Critters Vet',
    quantity: 6,
    amount: 50000,
    phoneNumber: '08109876543',
    date: new Date().toISOString(),
  },
  {
    id: 6,
    orderId: '#45465',
    companyName: 'Critters Vet',
    quantity: 6,
    amount: 50000,
    phoneNumber: '08109876543',
    date: new Date().toISOString(),
  },
  {
    id: 7,
    orderId: '#45465',
    companyName: 'Critters Vet',
    quantity: 6,
    amount: 50000,
    phoneNumber: '08109876543',
    date: new Date().toISOString(),
  },
];

const PendingOrders: NextPageWithLayout = () => {
  return <PendingOrderTable orders={orders} />;
};

PendingOrders.getLayout = function (page) {
  return <OrdersLayout>{page}</OrdersLayout>;
};

export default PendingOrders;
