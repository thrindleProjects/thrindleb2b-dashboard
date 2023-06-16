import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input';

import { GeneralOrderStatus } from '@/@types';
import { useAddPriceToItemMutation } from '@/api/orders';

import { initialValues, validationSchema } from './validation';

interface SingleOrderListItemFormProps {
  price: null | number;
  id: string;
  isAvailable: boolean;
  status: GeneralOrderStatus;
}

type SingleOrderListItemFormType = React.FC<SingleOrderListItemFormProps>;

const SingleOrderListItemForm: SingleOrderListItemFormType = ({
  price,
  id,
  isAvailable,
  status,
}) => {
  const [addPrice, { isLoading }] = useAddPriceToItemMutation();

  const formik = useFormik({
    initialValues: { ...initialValues, pricePerItem: price || '' },
    validationSchema,
    onSubmit: async (values) => {
      // logic here
      try {
        await addPrice({
          id,
          payload: { pricePerItem: Number(values.pricePerItem) },
        }).unwrap();
        toast.success('Price updated successfully');
      } catch (error) {
        logger(error);
      }
    },
    enableReinitialize: true,
  });

  if (!isAvailable) {
    return <></>;
  }

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-3'>
      <Input
        id='pricePerItem'
        name='pricePerItem'
        type='text'
        label='Price (each)'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.pricePerItem}
        error={formik.errors.pricePerItem && formik.errors.pricePerItem}
        errorText={formik.errors.pricePerItem}
        required={true}
        autoComplete='dng'
        disabled={status !== 'requested'}
      />
      {status === 'requested' && (
        <Button
          className='w-full text-base'
          type='submit'
          isLoading={isLoading}
        >
          {price ? 'Update' : 'Add'} Price
        </Button>
      )}
    </form>
  );
};

export default SingleOrderListItemForm;
