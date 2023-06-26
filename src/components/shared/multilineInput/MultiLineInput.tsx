import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import InputLabel from '@/components/shared/InputLabel/InputLabel';
import { MainMultiInput } from '@/components/shared/multilineInput/styled';
import { MultiLineInputProps } from '@/components/shared/multilineInput/types';

const MultiLineInput: React.FC<MultiLineInputProps> = ({
  className,
  id,
  name,
  onBlur,
  onChange,
  formikErrors,
  formikTouched,
  placeholder,
  value,
  label,
  numbOfRows,
  variant = 'primary',
}) => {
  return (
    <div className={`${className} flex flex-col gap-2`}>
      <InputLabel id={id} label={label} />
      <MainMultiInput
        className='h-full w-full bg-transparent text-xs outline-none placeholder:text-xs xl:text-sm xl:placeholder:text-sm'
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        rows={numbOfRows}
        name={name}
        variant={variant}
      />
      <AnimatePresence>
        {formikTouched && formikErrors && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            className='pl-1 pt-1 text-xs font-semibold text-red-300'
          >
            {formikErrors}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MultiLineInput;
