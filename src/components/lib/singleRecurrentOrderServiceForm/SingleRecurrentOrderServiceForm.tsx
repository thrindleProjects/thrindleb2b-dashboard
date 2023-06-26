import { useFormik } from 'formik';
import { useRouter } from 'next/router';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import InputAnimated from '@/components/shared/InputAnimated/InputAnimated';

import {
  useGetRecurrentOrderByIdQuery,
  useUpdateRecurrentShippingAndServiceChargeMutation,
} from '@/api/orders';

import { initialValues, validationSchema } from './validation';

const SingleRecurrentOrderServiceForm = () => {
  const { query } = useRouter();

  const { recurrentId } = query;

  const { data } = useGetRecurrentOrderByIdQuery(recurrentId as string, {
    skip: !recurrentId,
  });

  const [updateOrder, { isLoading }] =
    useUpdateRecurrentShippingAndServiceChargeMutation();

  const formik = useFormik({
    initialValues: {
      ...initialValues,
      serviceCharge: data?.data?.serviceCharge || '',
      shippingFee: data?.data?.deliveryFee || '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const payload = {
        shippingFee: Number(values.shippingFee),
        serviceCharge: Number(values.serviceCharge),
      };

      const { shippingFee, serviceCharge } = payload;

      if (
        shippingFee === data?.data?.deliveryFee &&
        serviceCharge === data?.data?.serviceCharge
      ) {
        return;
      }

      try {
        await updateOrder({
          id: recurrentId as string,
          payload,
        }).unwrap();
      } catch (error) {
        logger(error);
      }
    },
    enableReinitialize: true,
  });

  return (
    <form className='flex flex-col gap-2' onSubmit={formik.handleSubmit}>
      <InputAnimated
        type='text'
        label='Add Delivery Fee'
        id='shippingFee'
        name='shippingFee'
        value={formik.values.shippingFee}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.shippingFee && formik.touched.shippingFee}
        errorText={formik.errors.shippingFee}
        required={true}
      />
      <InputAnimated
        type='text'
        label='Add Service Charge'
        id='serviceCharge'
        name='serviceCharge'
        value={formik.values.serviceCharge}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.serviceCharge && formik.touched.serviceCharge}
        errorText={formik.errors.serviceCharge}
        required={true}
      />

      {!!formik.values.serviceCharge &&
        !!formik.values.shippingFee &&
        (Number(formik.values.serviceCharge) !== data?.data?.serviceCharge ||
          Number(formik.values.shippingFee) !== data?.data?.deliveryFee) && (
          <Button
            isLoading={isLoading}
            className='w-max px-6 py-2 text-xs'
            variant='outline'
            type='submit'
          >
            Update
          </Button>
        )}
    </form>
  );
};

export default SingleRecurrentOrderServiceForm;
