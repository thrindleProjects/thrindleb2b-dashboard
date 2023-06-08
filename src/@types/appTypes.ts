export type orderStatus = 'all' | 'pending' | 'in-progress' | 'completed';

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
