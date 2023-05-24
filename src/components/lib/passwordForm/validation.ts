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
  [CONSTANTS.PASSWORD]: Yup.string().required('Current Password is required'),
  [CONSTANTS.NEW_PASSWORD]: Yup.string().required('New Password is required'),
  [CONSTANTS.CONFIRM_PASSWORD]: Yup.string().required(
    'Confirm Password is required'
  ),
});

export const initialValues: {
  [CONSTANTS.CONFIRM_PASSWORD]: string;
  [CONSTANTS.PASSWORD]: string;
  [CONSTANTS.NEW_PASSWORD]: string;
} = {
  [CONSTANTS.CONFIRM_PASSWORD]: '',
  [CONSTANTS.PASSWORD]: '',
  [CONSTANTS.NEW_PASSWORD]: '',
};
