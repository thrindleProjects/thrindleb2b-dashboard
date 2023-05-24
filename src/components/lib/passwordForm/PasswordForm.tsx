import { useFormik } from 'formik';
import React from 'react';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input/Input';
import { WhiteCard } from '@/components/shared/whiteCard';

import * as CONSTANTS from '@/utils/constants';

import { initialValues, validationSchema } from './validation';

const PasswordForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      //
    },
  });
  return (
    <WhiteCard className='mt-6 px-10 py-8'>
      <form onSubmit={formik.handleSubmit} className='w-[70%]'>
        <div className=' flex justify-between gap-6 '>
          <Input
            id={CONSTANTS.PASSWORD}
            type={CONSTANTS.PASSWORD}
            value={formik.values[CONSTANTS.PASSWORD]}
            className='rounded-[8px]'
            label='Current Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors[CONSTANTS.PASSWORD] &&
              formik.touched[CONSTANTS.PASSWORD]
            }
            errorText={formik.errors[CONSTANTS.PASSWORD]}
            required={true}
          />
          <Input
            id={CONSTANTS.NEW_PASSWORD}
            type={CONSTANTS.PASSWORD}
            value={formik.values[CONSTANTS.NEW_PASSWORD]}
            className='rounded-[8px]'
            label='New Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors[CONSTANTS.NEW_PASSWORD] &&
              formik.touched[CONSTANTS.NEW_PASSWORD]
            }
            errorText={formik.errors[CONSTANTS.NEW_PASSWORD]}
            required={true}
          />
        </div>
        <div className=' mt-10 flex w-[50%] justify-between gap-6 '>
          <Input
            id={CONSTANTS.CONFIRM_PASSWORD}
            type={CONSTANTS.PASSWORD}
            value={formik.values[CONSTANTS.CONFIRM_PASSWORD]}
            className='rounded-[8px]'
            label='Confirm Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors[CONSTANTS.CONFIRM_PASSWORD] &&
              formik.touched[CONSTANTS.CONFIRM_PASSWORD]
            }
            errorText={formik.errors[CONSTANTS.CONFIRM_PASSWORD]}
            required={true}
          />
        </div>
        <Button type='submit' className='mt-10 w-[184px]'>
          Save Changes
        </Button>
      </form>
    </WhiteCard>
  );
};

export default PasswordForm;
