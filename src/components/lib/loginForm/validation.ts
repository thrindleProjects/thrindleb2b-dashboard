import * as Yup from 'yup';

export type LoginUserValuesType = { email: string; password: string };

export const initialValues: LoginUserValuesType = {
  email: '',
  password: '',
};

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Please provide a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});
