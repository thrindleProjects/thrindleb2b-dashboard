import { useFormik } from 'formik';
import React from 'react';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input/Input';
import { WhiteCard } from '@/components/shared/whiteCard';

import * as CONSTANTS from '@/utils/constants';

import { initialValues, validationSchema } from './validation';

const ProfileForm = () => {
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
            id={CONSTANTS.FIRST_NAME}
            type={CONSTANTS.TEXT}
            value={formik.values[CONSTANTS.FIRST_NAME]}
            className='rounded-[8px]'
            label='First Name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors[CONSTANTS.FIRST_NAME] &&
              formik.touched[CONSTANTS.FIRST_NAME]
            }
            errorText={formik.errors[CONSTANTS.FIRST_NAME]}
            required={true}
          />
          <Input
            id={CONSTANTS.LAST_NAME}
            type={CONSTANTS.TEXT}
            value={formik.values[CONSTANTS.LAST_NAME]}
            className='rounded-[8px]'
            label='Last Name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors[CONSTANTS.LAST_NAME] &&
              formik.touched[CONSTANTS.LAST_NAME]
            }
            errorText={formik.errors[CONSTANTS.LAST_NAME]}
            required={true}
          />
        </div>
        <div className=' mt-10 flex justify-between gap-6 '>
          <Input
            id={CONSTANTS.EMAIL}
            type={CONSTANTS.TEXT}
            value={formik.values[CONSTANTS.EMAIL]}
            className='rounded-[8px]'
            label='Email Address'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors[CONSTANTS.EMAIL] && formik.touched[CONSTANTS.EMAIL]
            }
            errorText={formik.errors[CONSTANTS.EMAIL]}
            required={true}
          />
          <Input
            id={CONSTANTS.PHONE}
            type={CONSTANTS.TEXT}
            value={formik.values[CONSTANTS.PHONE]}
            className='rounded-[8px]'
            label='Phone Number'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors[CONSTANTS.PHONE] && formik.touched[CONSTANTS.PHONE]
            }
            errorText={formik.errors[CONSTANTS.PHONE]}
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

export default ProfileForm;
