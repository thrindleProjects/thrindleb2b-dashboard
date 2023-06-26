import { useFormik } from 'formik';
import { ImSpinner2 } from 'react-icons/im';

import style from './inputsearch.module.scss';

import { InputSearchType } from '@/components/shared/InputSearch/types';

import { initialValues, validationSchema } from './validation';
const InputSearch: React.FC<InputSearchType> = ({ placeholder, isLoading }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      // logic here
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='relative w-full'>
      <input
        placeholder={placeholder}
        onChange={formik.handleChange}
        name='search'
        id='search'
        className={`${style.input_search} rounded-md border-none py-4 text-xs sm:text-sm md:text-base`}
      />
      {isLoading && (
        <div className='text-amali-green absolute right-6 top-1/2 -translate-y-1/2'>
          <ImSpinner2 className='animate-spin' />
        </div>
      )}
    </form>
  );
};

export default InputSearch;
