import { IDashboardNumbers } from '@/@types/appTypes';

export const orderStatues = [
  { status: 'All', slug: 'all' },
  { status: 'Requested', slug: 'requested' },
  { status: 'In-Progress', slug: 'in-progress' },
  { status: 'Pending', slug: 'pending' },
  { status: 'Completed', slug: 'completed' },
  { status: 'VIP', slug: 'owing' },
  { status: 'Cancelled', slug: 'cancelled' },
];
export const dashboardOrderHeader = [
  { status: 'Recent Orders', slug: 'recent' },
  { status: 'Recurrent Orders', slug: 'recurrent' },
];
export const dashboardTableHeaderData = [
  '#',
  'Order Id',
  'Customer Name',
  'Items',
  'Date',
  'Amount',
  'Status',
];

export const profileTab = ['General', 'Security', 'Users & Permission'];
export const dashboardNumbersData = [
  {
    title: 'Total Orders',
    value: 100,
    slug: 'totalOrders' as keyof IDashboardNumbers,
  },
  {
    title: 'Total Customers',
    value: 400,
    slug: 'totalCustomer' as keyof IDashboardNumbers,
  },
  {
    title: 'Total Delivered Orders',
    value: 500,
    slug: 'totalDeliveredOrders' as keyof IDashboardNumbers,
  },
  {
    title: 'Total Requested Orders',
    value: 1000,
    slug: 'totalRequestedOrders' as keyof IDashboardNumbers,
  },
  {
    title: 'Total Pending Orders',
    value: 50,
    slug: 'totalPendingOrders' as keyof IDashboardNumbers,
  },
  {
    title: 'Total Recurrent Orders',
    value: 250,
    slug: 'recurrentOrders' as keyof IDashboardNumbers,
  },
];
