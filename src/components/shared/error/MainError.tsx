import Image from 'next/image';
import React from 'react';

import Button from '@/components/buttons/Button';

const MainError = ({
  message,
  retry,
  className,
}: {
  message?: string;
  retry: () => void;
  className?: string;
}) => {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center ${className}`}
    >
      <Image
        src='/assets/svg/error.svg'
        width={70}
        height={70}
        alt='Error svg '
      />
      <p className='font-poppins pt-4 text-center text-2xl text-red-500'>
        Oops!
      </p>
      <p className='font-poppins pt-2 text-lg text-gray-400'>{message}</p>
      <Button variant='primary' onClick={retry} className='mt-7 w-[30%]'>
        Try Again
      </Button>
    </div>
  );
};

export default MainError;
