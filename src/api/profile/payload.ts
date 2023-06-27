export type ChangePasswordPayload = {
  currentPassword: string;
  password: string;
  confirmPassword: string;
};

export interface CreateNewAdmin {
  firstName: string;
  lastName: string;
  email: string;
}

export interface AllAdminData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: null;
  password: string;
  company: Record<string, string>;
  type: string;
}
