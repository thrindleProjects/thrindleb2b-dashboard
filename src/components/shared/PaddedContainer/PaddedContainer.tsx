import { PropsWithChildren } from 'react';

type PaddedContainerTyoe = React.FC<PropsWithChildren>;

const PaddedContainer: PaddedContainerTyoe = ({ children }) => {
  return <div className='h-full w-full overflow-y-auto p-10'>{children}</div>;
};

export default PaddedContainer;
