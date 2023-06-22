import { Icon } from '@iconify/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

import clsxm from '@/lib/clsxm';
import { useDisclosure } from '@/hooks';

import { MainInput, PasswordInput } from '@/components/shared/Input/styled';

import {
  InputDateType,
  InputEmailType,
  InputPasswordType,
  InputTextType,
} from '@/@types';
import { DATE, EMAIL, PASSWORD, TEXT } from '@/constant';

const buttonVariant: Variants = {
  initial: {
    opacity: 0,
    rotate: 0,
    transition: {
      duration: 0.25,
      ease: 'linear',
    },
  },
  animate: {
    opacity: 1,
    rotate: 360,
    transition: {
      duration: 0.25,
      ease: 'linear',
    },
  },
  exit: {
    opacity: 1,
    rotate: -360,
    transition: {
      duration: 0.25,
      ease: 'linear',
    },
  },
};

interface InputAnimatedProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  label: string;
  type: InputPasswordType | InputTextType | InputEmailType | InputDateType;
  variant?: 'primary' | 'secondary';
  initial?: boolean;
  error?: boolean | string;
  errorText?: string;
  activeContainerClassName?: string;
}

type InputAnimatedType = React.FC<InputAnimatedProps>;

const InputAnimated: InputAnimatedType = ({
  label,
  children,
  id = '',
  initial = false,
  type,
  error,
  errorText,
  variant,
  value,
  className,
  activeContainerClassName,
  ...rest
}) => {
  const { isOpen, toggle } = useDisclosure({ default: initial });
  const { isOpen: hidden, toggle: toggleVisibility } = useDisclosure();

  return (
    <div
      className={clsxm('flex w-full flex-col gap-2 overflow-x-hidden', [
        isOpen && !!activeContainerClassName && activeContainerClassName,
      ])}
    >
      <label
        htmlFor={id}
        className='text-primary-blue flex cursor-pointer justify-between text-sm font-medium'
        onClick={toggle}
      >
        <span>{label}</span>

        <button type='button' className='overflow-hidden'>
          <AnimatePresence mode='wait' initial={false}>
            {isOpen && (
              <motion.span
                className='inline-grid place-items-center p-1 outline-none'
                variants={buttonVariant}
                initial='initial'
                animate='animate'
                exit='exit'
                key='close'
              >
                <Icon icon='ph:minus' />
              </motion.span>
            )}
            {!isOpen && (
              <motion.span
                className='inline-grid place-items-center p-1 outline-none'
                variants={buttonVariant}
                initial='initial'
                animate='animate'
                exit='exit'
                key='open'
              >
                <Icon icon='ph:plus' />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </label>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}
            className='h-max w-full overflow-hidden bg-red-500'
          >
            {type === PASSWORD && (
              <PasswordInput
                error={error}
                variant={variant}
                className='flex w-full flex-row items-center border-b-2 px-2 transition-all duration-300 ease-in md:px-4'
              >
                <input
                  type={hidden ? PASSWORD : TEXT}
                  value={value}
                  {...rest}
                  id={id}
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
                  id={id}
                  {...rest}
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
          </motion.div>
        )}
      </AnimatePresence>
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
      {children}
    </div>
  );
};

export default InputAnimated;
