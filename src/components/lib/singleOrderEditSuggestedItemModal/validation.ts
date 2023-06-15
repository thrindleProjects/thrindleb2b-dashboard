import * as Yup from 'yup';

export const validationSchema = Yup.object({
  images: Yup.array()
    .test(
      'validate image',
      'Please provide a valid image',
      (value: (string | File)[] | undefined, context) => {
        if (!value || !value.length) {
          return true;
        }
        const isValid = value.every((item) => {
          if (typeof item === 'string') {
            return true;
          }

          if (item instanceof File) {
            return item.type.includes('image/');
          }

          return false;
        });

        if (!isValid) context?.createError();

        return isValid;
      }
    )
    .min(1, 'Please provide at least one image')
    .max(6, 'You cannot upload more than 6 images')
    .required('Please provide at least one image'),
  description: Yup.string().required('Description is required'),
  name: Yup.string().required('Name is required'),
  price: Yup.number()
    .required('Price is required')
    .typeError('Price must be a number')
    .min(1, 'Must be greater than zero'),
});

export type UpdateSubstituteItem = {
  images?: (File | string)[];
  description: string;
  price: string | number;
  name: string;
  image?: (File | string)[];
};

export const initialValues: UpdateSubstituteItem = {
  images: [],
  description: '',
  price: '',
  name: '',
};
