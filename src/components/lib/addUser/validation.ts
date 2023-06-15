import * as Yup from 'yup';

import * as CONSTANTS from '@/constant';

export const SUPPORTED_FORMATS = ['jpg', 'jpeg', 'gif', 'png', 'doc', 'docx'];

export const getExtension = (filename: string) => {
  return (
    (filename &&
      filename.substring(filename.lastIndexOf('.') + 1, filename.length)) ||
    filename
  );
};

export const validationSchema = Yup.object({
  [CONSTANTS.FULLNAME]: Yup.string().required('Full Name is required'),
  [CONSTANTS.EMAIL_ADDRESS]: Yup.string().required('Email address is required'),
  [CONSTANTS.PHONE_NUMBER]: Yup.string().required('Phone Number is required'),
  [CONSTANTS.ROLE]: Yup.string().required('Role is required'),
});

export const initialValues: {
  [CONSTANTS.FULLNAME]: string;
  [CONSTANTS.EMAIL_ADDRESS]: string;
  [CONSTANTS.PHONE_NUMBER]: string;
  [CONSTANTS.ROLE]: string;
} = {
  [CONSTANTS.FULLNAME]: '',
  [CONSTANTS.EMAIL_ADDRESS]: '',
  [CONSTANTS.PHONE_NUMBER]: '',
  [CONSTANTS.ROLE]: '',
};
