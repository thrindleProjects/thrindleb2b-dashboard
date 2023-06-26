import { Spinner, SpinnerSizes } from 'flowbite-react';
import React from 'react';

type spinnerType = 'default' | 'fullScreen';

const SpinnerLoader = ({
  className,
  type = 'default',
  size = 'xl',
}: {
  className?: string;
  type?: spinnerType;
  size?: keyof SpinnerSizes | undefined;
}) => {
  return (
    <div
      className={`${
        type === 'fullScreen' &&
        'flex h-full w-full flex-col items-center justify-center'
      } ${className}`}
    >
      <Spinner aria-label='Extra large spinner example' size={size} />
    </div>
  );
};

export default SpinnerLoader;
