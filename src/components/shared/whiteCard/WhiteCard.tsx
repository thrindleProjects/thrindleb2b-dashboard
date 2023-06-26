import { ReactNode } from 'react';

const WhiteCard = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={` w-full rounded-lg bg-white p-5 ${className}`}>
      {children}
    </div>
  );
};

export default WhiteCard;
