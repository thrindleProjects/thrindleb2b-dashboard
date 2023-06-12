import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

import logger from '@/lib/logger';

import InputFilePreview from '@/components/shared/inputFilePreview/InputFilePreview';
import InputLabel from '@/components/shared/InputLabel';

import { FileInput } from './styled';
import { InputFileProps } from './types';

function uniqueFileArray(arr: (File | string)[] | File[]): (File | string)[] {
  const uniqueMap = new Map<string, File | string>();

  arr.forEach((file) => {
    const key = typeof file === 'string' ? file : `${file.name}-${file.type}`;
    if (!uniqueMap.has(key)) {
      uniqueMap.set(key, file);
    }
  });

  return Array.from(uniqueMap.values());
}

const InputFile: React.FC<InputFileProps<HTMLInputElement>> = (props) => {
  const {
    error,
    label,
    value,
    onChange,
    required,
    onBlur,
    placeholder,
    className,
    errorText,
    id,
    name,
    multiple,
    extensions,
    showPreview,
    onDelete,
  } = props;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files && Array.from(e.target.files);
    if (!files || !files.length) {
      return;
    }
    if (!multiple) {
      onChange(id, files);
      return;
    }
    const fileArrayNoDuplicates: (string | File)[] = uniqueFileArray([
      ...(value || []),
      ...files,
    ]);
    (
      onChange as (
        id: string,
        value: (File | string)[],
        shouldValidate: boolean
      ) => void
    )(id, fileArrayNoDuplicates, true);

    return;
  };

  const handleRemoveFile = async (removeFile: File | string) => {
    if (!value || !value.length) return false;

    const updatedValue: (File | string)[] = value.filter((file) => {
      if (file instanceof File && removeFile instanceof File) {
        return file.name !== removeFile.name;
      }

      if (typeof file === 'string' && typeof removeFile === 'string') {
        return file !== removeFile;
      }

      return true;
    });

    if (typeof removeFile === 'string' && onDelete) {
      try {
        await onDelete(removeFile);
        toast.success('image removed successfully');
        (
          onChange as (
            id: string,
            value: (File | string)[],
            shouldValidate: boolean
          ) => void
        )(id, updatedValue, true);
        return true;
      } catch (error: unknown) {
        // logic here
        logger(error);
        toast.error('Something went wrong');
        return false;
      }
    }

    (
      onChange as (
        id: string,
        value: (File | string)[],
        shouldValidate: boolean
      ) => void
    )(id, updatedValue, true);

    return true;
  };

  return (
    <div className='flex w-full flex-col gap-2'>
      {label && !!label.length && <InputLabel id={id} label={label} />}
      <FileInput
        className={`border-primary-blue relative w-full rounded-lg border border-dashed px-2 text-xs shadow-inner outline-none transition-all duration-300 ease-in placeholder:text-xs md:px-4 xl:text-sm xl:placeholder:text-sm ${
          className ? className : ''
        }`}
      >
        <input
          type='file'
          name={name}
          id={id}
          onBlur={onBlur}
          className='absolute left-0 top-0 h-full w-full opacity-0'
          required={required}
          onChange={handleFileUpload}
          multiple={Boolean(multiple)}
          accept={`${extensions ? extensions : 'image/*'}`}
        />
        <div className='grid grid-cols-7'>
          <span className='col-span-1 grid place-items-center text-2xl'>
            <Icon icon='ph:image' />
          </span>
          <span className='col-span-5 flex items-center py-4 pl-2 lg:py-4 xl:py-5'>
            {!value?.length && placeholder}
            {!!multiple && value && !!value.length && 'Upload more'}
            {!multiple &&
              value &&
              !!value.length &&
              value[0] instanceof File &&
              value[0].name}
            {!multiple &&
              value &&
              !!value.length &&
              typeof value[0] === 'string' &&
              value[0]}
          </span>
        </div>
      </FileInput>
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            className='pl-1 pt-1 text-xs font-semibold text-red-300'
          >
            {errorText}
          </motion.div>
        )}
      </AnimatePresence>
      {showPreview && value && !!value.length && (
        <InputFilePreview value={value} onRemove={handleRemoveFile} />
      )}
    </div>
  );
};

export default InputFile;
