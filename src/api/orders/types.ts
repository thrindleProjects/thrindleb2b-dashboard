import { Company, GeneralOrderStatus } from '@/@types';

export type OrdersType = {
  id: string;
  orderStatus: Exclude<GeneralOrderStatus, 'all'>;
  orderRefCode: string;
  company: Company;
  priceUpdated: boolean;
  deliveryConfirmation: boolean;
  deliveryFee: null | number;
  paymentStatus: boolean;
  paymentTotal: number;
  listItems: string[];
  createdAt: string;
  updatedAt: string;
  paymentDate: string | null;
  serviceCharge: null | number;
  total: number;
  subtotal: number;
};

export type GetOrdersResponse<T> = {
  data: T[];
  count: number;
  total?: number;
  totalVIPCustomers?: number;
  currentpage: number;
  nextpage: null | number;
  prevpage: null | number;
  lastpage: null | number;
};

export type RecurrentOrderType = {
  id: string;
  deliveryFee: null | number;
  orderStatus: Exclude<GeneralOrderStatus, 'all'>;
  orderRefCode: string;
  company: Company;
  priceUpdated: boolean;
  listItems: string[];
  createdAt: string;
  updatedAt: string;
  recurringPaymentAmount: null | number;
  recurringDeliveryDay: null | number;
  serviceCharge: null | number;
};

export type SubstituteItemType = {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  quantity: number;
  volumeDiscount: boolean;
  volumeDiscountAmt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListItemType = {
  id: string;
  name: string;
  description: string;
  images: string[];
  isSubstitute: boolean;
  substitutes: SubstituteItemType[];
  price: null | number;
  recurrent: boolean;
  isAvailable: boolean;
  companyId: string;
  quantity: number;
  volumeDiscount: boolean;
  volumeDiscountAmt: number;
  createdAt: string;
  updatedAt: string;
};

export type SingleOrder = Omit<OrdersType, 'listItems'> & {
  listItems: ListItemType[];
};

export type RecurrentOrderListItemType = {
  id: string;
  name: string;
  description: string;
  images: null | string[];
  isSubstitute: boolean;
  price: null | number;
  recurrent: boolean;
  substitutes: SubstituteItemType[];
  isAvailable: boolean;
  companyId: string;
  quantity: number;
  volumeDiscount: boolean;
  volumeDiscountAmt: number;
  createdAt: string;
  updatedAt: string;
  total: null | number;
};

export type SingleRecurrentOrder = Omit<RecurrentOrderType, 'listItems'> & {
  listItems: RecurrentOrderListItemType[];
};
