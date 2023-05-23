import type { FC, PropsWithChildren } from 'react';

import type { TableRowProps } from './TableProps';

const TableRow: FC<PropsWithChildren<TableRowProps>> = ({
  children,
  onClick,
  className,
  // bg2,
}) => {
  return (
    <tr
      className={`${className}  border-none bg-transparent py-4 text-[16px] font-[500] `}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {children}
    </tr>
  );
};

export default TableRow;
