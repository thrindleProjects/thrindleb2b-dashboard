import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input';

import { PASSWORD, TEXT } from '@/utils/constants';

import { initialValues, validationSchema } from './validation';

const LoginForm: React.FC = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const result = await signIn('login', {
          ...values,
          redirect: false,
        });

        if ((!result || result.error) && result?.error !== 'undefined') {
          if (result?.error === 'CredentialsSignin') {
            // yes
            (await import('react-hot-toast')).toast.error(
              'Something went wrong'
            );
            return;
          }
          (await import('react-hot-toast')).toast.error(
            result?.error ?? 'Something went wrong'
          );

          return;
        }
        formik.resetForm();
        if (typeof router.query.callbackUrl === 'string') {
          return router.replace(new URL(router.query.callbackUrl));
        }

        router.replace('/');
      } catch (error) {
        logger(error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className='h-full w-full'>
      <form className='mt-6 flex flex-col gap-5' onSubmit={formik.handleSubmit}>
        <Input
          id='email'
          type={TEXT}
          value={formik.values.email}
          placeholder='Email Address'
          label='Email Address'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email && formik.touched.email}
          errorText={formik.errors.email}
          required={true}
        />

        <Input
          id='password'
          type={PASSWORD}
          value={formik.values.password}
          placeholder='XXXXXX'
          label='Password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password && formik.touched.password}
          errorText={formik.errors.password}
          required={true}
          autoComplete='dnj'
        />

        <Link
          href='/forgot-password'
          className='text-primary-blue w-fit text-xs font-medium'
        >
          Forgot Password?
        </Link>
        <Button
          className='mt-4 w-full'
          variant='primary'
          type='submit'
          isLoading={isLoading}
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
