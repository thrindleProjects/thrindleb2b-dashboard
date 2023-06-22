import * as Yup from 'yup';

export type ServiceFormValueType = {
  serviceCharge: number | string;
  shippingFee: number | string;
};

export const initialValues: ServiceFormValueType = {
  serviceCharge: '',
  shippingFee: '',
};

export const validationSchema = Yup.object({
  serviceCharge: Yup.number()
    .typeError('Must be a number')
    .min(1, 'Must be greater than 1')
    .required('Service charge is required'),

  shippingFee: Yup.number()
    .typeError('Must be a number')
    .min(1, 'Must be greater than 1')
    .required('Shipping fee is required'),
});
