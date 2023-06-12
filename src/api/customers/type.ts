export interface ICompanyData {
  id: string;
  companyName: string;
  email: string;
  address: string;
  state: string;
  landmark: string;
  logo: string;
  contactPhone: string;
  isVIP: boolean;
  alternateContactPhone: string;
  status: string;
  token: string;
  tokenExpiry: Date;
}

interface IMouthCount {
  month: string;
  count: number;
}

export interface IGraphData {
  monthCount: IMouthCount[];
  percentageIncrease: number;
}

interface IListItems {
  id: string;
  name: string;
  description: string;
  images: string[];
  isSubstitute: boolean;
  substitutes: [];
  price: null | number;
  recurrent: boolean;
  isAvailable: boolean;
  companyId: string;
  quantity: number;
  volumeDiscount: boolean;
  volumeDiscountAmt: number;
  createdAt: string;
  updatedAt: string;
}

export interface ICompanyOrderData {
  id: string;
  orderStatus: string;
  orderRefCode: string;
  company: Record<string, string>;
  priceUpdated: boolean;
  deliveryConfirmation: boolean;
  paymentStatus: boolean;
  paymentTotal: number;
  listItems: IListItems[];
  createdAt: string;
  updatedAt: string;
  paymentDate: null;
}

export interface MakeCompanyVipPayload {
  isVIP: boolean;
}
