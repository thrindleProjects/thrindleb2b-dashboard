import * as Yup from 'yup';

export const initialValues: { pricePerItem: number } = { pricePerItem: 0 };

export const validationSchema = Yup.object({
  pricePerItem: Yup.number()
    .required('Price is required')
    .typeError('Must be a number')
    .min(1, 'Price must be greater than 0'),
});
