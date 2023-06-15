import { useFormik } from 'formik';
import React from 'react';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input/Input';
import Select from '@/components/shared/Select/Select';

import * as CONSTANTS from '@/constant';

import { initialValues, validationSchema } from './validation';

const AddUserForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      //
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='mb-8'>
        <p className='text-primary-blue text-[24px] font-[600]'>
          Add New user{' '}
        </p>
      </div>
      <div className='mt-6 '>
        <Input
          id={CONSTANTS.FULLNAME}
          type={CONSTANTS.TEXT}
          value={formik.values[CONSTANTS.FULLNAME]}
          className='rounded-[8px]'
          label='Full Name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.FULLNAME] &&
            formik.touched[CONSTANTS.FULLNAME]
          }
          errorText={formik.errors[CONSTANTS.FULLNAME]}
          required={true}
        />
      </div>
      <div className='mt-6'>
        <Input
          id={CONSTANTS.EMAIL_ADDRESS}
          type={CONSTANTS.EMAIL}
          value={formik.values[CONSTANTS.EMAIL_ADDRESS]}
          className='rounded-[8px]'
          label='Email Address'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.EMAIL_ADDRESS] &&
            formik.touched[CONSTANTS.EMAIL_ADDRESS]
          }
          errorText={formik.errors[CONSTANTS.EMAIL_ADDRESS]}
          required={true}
        />
      </div>
      <div className='mt-6'>
        <Input
          id={CONSTANTS.PHONE_NUMBER}
          type={CONSTANTS.TEXT}
          value={formik.values[CONSTANTS.PHONE_NUMBER]}
          className='rounded-[8px]'
          label='Phone Number'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors[CONSTANTS.PHONE_NUMBER] &&
            formik.touched[CONSTANTS.PHONE_NUMBER]
          }
          errorText={formik.errors[CONSTANTS.PHONE_NUMBER]}
          required={true}
        />
      </div>
      <div className='mt-6'>
        <Select
          label='Role'
          id={CONSTANTS.ROLE}
          name={CONSTANTS.ROLE}
          onChangeValue={formik.setFieldValue}
          value={formik.values[CONSTANTS.ROLE]}
          onBlurEvent={formik.setFieldTouched}
          error={
            formik.errors[CONSTANTS.ROLE] && formik.touched[CONSTANTS.ROLE]
          }
          errorText={formik.errors[CONSTANTS.ROLE]}
          required={true}
          options={[{ label: 'Role 1', value: 'Role 1' }]}
        />
      </div>

      <Button
        type='submit'
        className=' mt-8 h-[52px] w-full '
        variant='primary'
        // isLoading={isLoading || addLoading}
      >
        Add User
      </Button>
    </form>
  );
};

export default AddUserForm;
