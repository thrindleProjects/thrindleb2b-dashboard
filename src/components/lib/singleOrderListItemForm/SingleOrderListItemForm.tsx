import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input';

import { useAddPriceToItemMutation } from '@/api/orders';

import { initialValues, validationSchema } from './validation';

interface SingleOrderListItemFormProps {
  price: null | number;
  id: string;
}

type SingleOrderListItemFormType = React.FC<SingleOrderListItemFormProps>;

const SingleOrderListItemForm: SingleOrderListItemFormType = ({
  price,
  id,
}) => {
  const [addPrice, { isLoading }] = useAddPriceToItemMutation();

  const formik = useFormik({
    initialValues: { ...initialValues, pricePerItem: price || 0 },
    validationSchema,
    onSubmit: async (values) => {
      // logic here
      try {
        await addPrice({ id, payload: values }).unwrap();
        toast.success('Price updated successfully');
      } catch (error) {
        logger(error);
      }
    },
    enableReinitialize: true,
  });

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
      />

      <Button className='w-full text-base' type='submit' isLoading={isLoading}>
        {price ? 'Update' : 'Add'} Price
      </Button>
    </form>
  );
};

export default SingleOrderListItemForm;
