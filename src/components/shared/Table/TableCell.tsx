import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';

import styles from './Table.module.scss';

import type { TableCellProps } from './TableProps';

const TableCell: FC<PropsWithChildren<TableCellProps>> = ({
  children,
  url,
  onClick,
}) => {
  return (
    <td onClick={onClick} className={styles.table__cell}>
      {url ? (
        <Link href={url} className='w-full ' passHref>
          <a>{children}</a>
        </Link>
      ) : (
        children
      )}
    </td>
  );
};

export default TableCell;
