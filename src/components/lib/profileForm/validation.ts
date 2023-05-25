import * as Yup from 'yup';

import * as CONSTANTS from '@/utils/constants';

export const SUPPORTED_FORMATS = ['jpg', 'jpeg', 'gif', 'png', 'doc', 'docx'];

export const getExtension = (filename: string) => {
  return (
    (filename &&
      filename.substring(filename.lastIndexOf('.') + 1, filename.length)) ||
    filename
  );
};

export const validationSchema = Yup.object({
  [CONSTANTS.FIRST_NAME]: Yup.string().required('First Name is required'),
  [CONSTANTS.LAST_NAME]: Yup.string().required('Last Name is required'),
  [CONSTANTS.EMAIL]: Yup.string().required('Email is required'),
  [CONSTANTS.PHONE]: Yup.string().required('Phone is required'),
});

export const initialValues: {
  [CONSTANTS.EMAIL]: string;
  [CONSTANTS.FIRST_NAME]: string;
  [CONSTANTS.LAST_NAME]: string;
  [CONSTANTS.PHONE]: string;
} = {
  [CONSTANTS.EMAIL]: '',
  [CONSTANTS.FIRST_NAME]: '',
  [CONSTANTS.LAST_NAME]: '',
  [CONSTANTS.PHONE]: '',
};
