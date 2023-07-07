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
  | 'requested'
  | 'cancelled';

export type Company = {
  id: string;
  companyName: string;
  email: string;
  address: string;
  state: null | string;
  landmark: null | string;
  logo: null | string;
  contactPhone: string;
  isVIP: boolean;
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
  | 'owing'
  | 'cancelled';

export interface IDashboardNumbers {
  recurrentOrders: number;
  totalCustomer: number;
  totalDeliveredOrders: number;
  totalOrders: number;
  totalPendingOrders: number;
  totalRequestedOrders: number;
}
// INPUT TYPES START
export type InputPasswordType = 'password';
export type InputTextType = 'text';
export type InputEmailType = 'email';
export type InputDateType = 'date';
export type InputFileType = 'file';
export type InputSelectType = 'select';
// INPUT TYPES END

// GENERAL RESPONSE STRUCTURE TYPE START
export interface INetworkSuccessResponse<T> {
  data: T;
  message: string;
  status?: string;
  success?: boolean;
}
// GENERAL RESPONSE STRUCTURE TYPE END
