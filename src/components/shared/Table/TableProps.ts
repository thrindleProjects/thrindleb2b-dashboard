export interface TableCellProps {
  url?: string;
  onClick?: () => void;
}

export interface TableHeadProps {
  items: string[];
}

export interface TableRowProps {
  onClick?: () => void;
  className?: string;
  bg2?: string | undefined;
}
