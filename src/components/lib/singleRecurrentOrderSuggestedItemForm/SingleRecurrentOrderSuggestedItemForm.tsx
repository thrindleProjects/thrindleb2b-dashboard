import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { toast } from 'react-hot-toast';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input';
import InputFile from '@/components/shared/InputFile/InputFile';
import MultiLineInput from '@/components/shared/multilineInput/MultiLineInput';

import {
  useAddSubstitutesToItemMutation,
  useGetRecurrentOrderByIdQuery,
} from '@/api/orders';
import { RecurrentOrderListItemType } from '@/api/orders/types';

import { initialValues, SubstituteItem, validationSchema } from './validation';

const SingleRecurrentOrderSuggestedItemForm = () => {
  const {
    query: { itemId, recurrentId },
  } = useRouter();

  const { data } = useGetRecurrentOrderByIdQuery(recurrentId as string, {
    skip: !recurrentId,
    refetchOnFocus: false,
    refetchOnMountOrArgChange: false,
  });

  const item: RecurrentOrderListItemType = useMemo(() => {
    if (!data) {
      return undefined;
    }

    if (!itemId) return data.data.listItems[0];

    return data.data.listItems.find((listItem) => listItem.id === itemId);
  }, [itemId, data]) as RecurrentOrderListItemType;

  const [addSubstitute, { isLoading }] = useAddSubstitutesToItemMutation();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (submittedValue) => {
      // logic here

      if (!itemId || typeof itemId !== 'string') {
        toast.error('Please refresh this page');
        return;
      }

      const formData = new FormData();

      const keys = Object.keys(submittedValue) as (keyof SubstituteItem)[];

      keys.forEach((key) => {
        const value = submittedValue[key];

        if (
          key === 'image' &&
          value &&
          typeof value !== 'string' &&
          typeof value !== 'number'
        ) {
          value.forEach((image) => {
            formData.append(`${key}`, image as Blob);
          });
          return;
        }

        formData.append(key, value as string | Blob);
      });

      formData.append('quantity', item.quantity as unknown as string | Blob);

      try {
        await addSubstitute({ id: itemId, payload: formData }).unwrap();
        toast.success('Substitute added successfully');
        formik.resetForm();
      } catch (error) {
        logger(error);
      }
    },
    enableReinitialize: true,
  });

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
      <Input
        label='Name'
        id='name'
        name='name'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required={true}
        error={formik.touched.name && formik.errors.name}
        errorText={formik.errors.name}
        value={formik.values.name}
        variant='secondary'
      />

      <MultiLineInput
        label='Item Description'
        id='description'
        name='description'
        className='rounded-lg'
        formikTouched={formik.touched.description}
        formikErrors={formik.errors.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
        numbOfRows={4}
        variant='secondary'
      />

      <Input
        label='Price (each)'
        id='price'
        name='price'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.price && formik.errors.price}
        errorText={formik.errors.price}
        value={formik.values.price}
        required={true}
        variant='secondary'
      />

      <div>
        <InputFile
          label='Item Images'
          id='image'
          type='file'
          name='image'
          placeholder='Click to upload image or drag here'
          value={formik.values.image}
          onChange={formik.setFieldValue}
          onBlur={formik.handleBlur}
          error={formik.errors.image && formik.touched.image}
          errorText={formik.errors.image}
          required={true}
          extensions='image/*'
          showPreview={true}
          multiple={true}
        />

        <p className='text-primary-blue/60 mt-1 text-xs font-medium'>
          You can upload multiple images
        </p>
      </div>

      <Button
        variant='light'
        className='w-max px-6'
        type='submit'
        isLoading={isLoading}
      >
        Add
      </Button>
    </form>
  );
};

export default SingleRecurrentOrderSuggestedItemForm;
