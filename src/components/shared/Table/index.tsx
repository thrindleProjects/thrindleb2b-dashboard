import type { FC, PropsWithChildren } from 'react';

import styles from './Table.module.scss';

const Table: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <table className={`gfg ${styles.table}`}>{children}</table>
    </div>
  );
};

export default Table;
