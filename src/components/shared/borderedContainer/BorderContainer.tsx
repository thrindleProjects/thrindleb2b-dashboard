import React from 'react';

const BorderContainer = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={` rounded border border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default BorderContainer;
