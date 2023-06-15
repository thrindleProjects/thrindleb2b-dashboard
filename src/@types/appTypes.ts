export interface INetworkResponse<T> {
  message: string;
  status: boolean;
  data: T;
}

export type orderStatus =
  | 'all'
  | 'pending'
  | 'in-progress'
  | 'completed'
  | 'requested';

export type Company = {
  id: string;
  companyName: string;
  email: string;
  address: string;
  state: null | string;
  landmark: null | string;
  logo: null | string;
  contactPhone: string;
  alternateContactPhone: string;
  status: string;
  token: string;
  tokenExpiry: string;
};

export type GeneralOrderStatus =
  | 'all'
  | 'in-progress'
  | 'requested'
  | 'pending'
  | 'completed'
  | 'owing';

export interface IDashboardNumbers {
  recurrentOrders: number;
  totalCustomer: number;
  totalDeliveredOrders: number;
  totalOrders: number;
  totalPendingOrders: number;
  totalRequestedOrders: number;
}
