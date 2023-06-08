import { PropsWithChildren } from 'react';

type PaddedContainerTyoe = React.FC<PropsWithChildren>;

const PaddedContainer: PaddedContainerTyoe = ({ children }) => {
  return (
    <div className='relative h-full w-full overflow-y-auto px-10 py-14'>
      {children}
    </div>
  );
};

export default PaddedContainer;
