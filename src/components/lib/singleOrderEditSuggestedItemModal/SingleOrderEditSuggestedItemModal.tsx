import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input';
import InputFile from '@/components/shared/InputFile/InputFile';
import GenModal from '@/components/shared/modal';
import MultiLineInput from '@/components/shared/multilineInput/MultiLineInput';

import { useUpdateSingleSubstituteMutation } from '@/api/orders';
import { SubstituteItemType } from '@/api/orders/types';

import {
  initialValues,
  UpdateSubstituteItem,
  validationSchema,
} from './validation';

interface SingleOrderEditSuggestedItemModalProps extends SubstituteItemType {
  isOpen: boolean;
  onClose: () => void;
}

type SingleOrderEditSuggestedItemModalType =
  React.FC<SingleOrderEditSuggestedItemModalProps>;

const SingleOrderEditSuggestedItemModal: SingleOrderEditSuggestedItemModalType =
  ({ isOpen, onClose, id, ...rest }) => {
    const [updateItem, { isLoading }] = useUpdateSingleSubstituteMutation();

    const formik = useFormik({
      initialValues: {
        ...initialValues,
        ...{
          images: rest.images,
          description: rest.description,
          price: rest.price,
          name: rest.name,
        },
      },
      validationSchema,
      enableReinitialize: true,
      onSubmit: async (values) => {
        // logic here

        const formData = new FormData();

        const updateData: UpdateSubstituteItem = {
          image: values.images,
          name: values.name,
          description: values.description,
          price: values.price,
        };
        const keys = Object.keys(updateData) as (keyof Omit<
          UpdateSubstituteItem,
          'images'
        >)[];

        keys.forEach((key) => {
          const value = updateData[key];
          if (
            value &&
            key === 'image' &&
            typeof value !== 'string' &&
            typeof value !== 'number'
          ) {
            value.forEach((item) => {
              if (item instanceof File) {
                formData.append('image', item);
              }
            });
            return;
          }
          formData.append(key, value as string | Blob);
        });

        try {
          await updateItem({ id, payload: formData }).unwrap();
          toast.success('Item updated successfully');
        } catch (error) {
          logger(error);
        }
      },
    });

    const handleClose = () => {
      formik.resetForm();
      onClose();
    };

    return (
      <GenModal isOpen={isOpen} handleCloseModal={handleClose}>
        <div className='flex flex-col gap-8'>
          <p className='text-primary-blue text-xl font-semibold xl:text-2xl'>
            Edit Suggested Item
          </p>

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
            />

            <div>
              <InputFile
                label='Item Images'
                id='images'
                type='file'
                name='images'
                placeholder='Click to upload image or drag here'
                value={formik.values.images}
                onChange={formik.setFieldValue}
                onBlur={formik.handleBlur}
                error={formik.errors.images && formik.touched.images}
                errorText={formik.errors.images as string}
                extensions='image/*'
                showPreview={true}
                multiple={true}
              />

              <p className='text-primary-blue/60 mt-1 text-xs font-medium'>
                You can upload multiple images
              </p>
            </div>

            <Button className='px-6' type='submit' isLoading={isLoading}>
              Update
            </Button>
          </form>
        </div>
      </GenModal>
    );
  };

export default SingleOrderEditSuggestedItemModal;
