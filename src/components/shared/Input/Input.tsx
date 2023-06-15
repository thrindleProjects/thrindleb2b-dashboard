import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { DATE, EMAIL, PASSWORD, TEXT } from '@/constant';

import { MainInput, PasswordInput } from './styled';
import { InputProps } from './types';
import InputLabel from '../InputLabel';

const Input: React.FC<InputProps> = ({
  error,
  label,
  value,
  onChange,
  onFocus,
  disabled,
  required,
  type,
  onBlur,
  placeholder,
  maxLength,
  className,
  errorText,
  id,
  name,
  variant,
  ...rest
}) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const toggleVisibility = (): void => {
    setHidden((prevState) => !prevState);
  };

  return (
    <div className='w-full'>
      <div className='flex flex-col gap-2'>
        {label && !!label.length && <InputLabel id={id} label={label} />}
        {type === PASSWORD && (
          <PasswordInput
            error={error}
            variant={variant}
            className='flex w-full flex-row items-center border-b-2 px-2 transition-all duration-300 ease-in md:px-4'
          >
            <input
              type={hidden ? PASSWORD : TEXT}
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              disabled={disabled}
              required={required}
              onBlur={onBlur}
              placeholder={placeholder}
              id={id}
              name={name}
              className={`h-full w-11/12 border-none bg-transparent px-0 py-[0.85rem] text-xs outline-none placeholder:text-xs focus:outline-none lg:text-sm xl:placeholder:text-sm ${
                className ? className : ''
              }`}
              {...rest}
            />
            <span className='eye md:ml-auto'>
              {!hidden ? (
                <svg
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  onClick={toggleVisibility}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  ></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1'
                    d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  onClick={toggleVisibility}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1'
                    d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21'
                  />
                </svg>
              )}
            </span>
          </PasswordInput>
        )}
        {[TEXT, EMAIL, DATE].includes(type) && (
          <MainInput
            value={value}
            error={error?.toString()}
            type={type}
            variant={variant}
            // className={`w-full border-x-0 border-b-2 border-t-0 px-2 py-[0.85rem] text-xs outline-none transition-all duration-300 ease-in placeholder:text-xs md:px-3 lg:text-sm xl:placeholder:text-sm ${
            //   className ? className : ''
            // }`}
            {...rest}
          >
            <input
              type={type}
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              disabled={disabled}
              required={required}
              onBlur={onBlur}
              placeholder={placeholder}
              maxLength={maxLength}
              id={id}
              name={name}
              // className={`h-full w-full border-none bg-transparent px-0 py-[0.85rem] text-xs outline-none placeholder:text-xs focus:outline-none  lg:text-sm xl:placeholder:text-sm ${
              //   className ? className : ''
              // }`}
              className={`w-full border-x-0 border-b-2 border-t-0 px-2 py-[0.85rem] text-xs outline-none transition-all duration-300 ease-in placeholder:text-xs md:px-3 lg:text-sm xl:placeholder:text-sm ${
                className ? className : ''
              }`}
              {...rest}
            />
          </MainInput>
        )}
      </div>

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
    </div>
  );
};

export default Input;
