import { default as MaterialUIPagination } from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useRouter } from 'next/router';

import { getQueryParams } from '@/utils/functions';

import { PaginationWrapper } from './styled';

type PaginationProps = React.FC<{
  count: number;
  className?: string;
}>;

const Pagination: PaginationProps = ({ count, className }) => {
  const router = useRouter();

  const { page } = router.query;

  const handleClick = (item: number | null) => {
    if (item === null) {
      return;
    }
    if (router.isReady) {
      const [asPathUrl, asPathQuery] = router.asPath.split('?');
      const resolvedQuery = getQueryParams(asPathQuery ?? '');

      router.push(
        {
          pathname: asPathUrl,
          query: { ...resolvedQuery, page: item },
        },
        {
          pathname: asPathUrl,
          query: { ...resolvedQuery, page: item },
        },
        { shallow: true }
      );
    }
  };

  if (count === 1 || !router.isReady) {
    return <></>;
  }

  return (
    <PaginationWrapper className={className}>
      <MaterialUIPagination
        page={parseInt(`${page}`, 10) || 1}
        count={count}
        renderItem={({
          selected,
          page,
          disabled,
          variant,
          shape,
          type,
          size,
        }) => (
          <PaginationItem
            onClick={() => handleClick(page)}
            selected={selected}
            disabled={disabled}
            variant={variant}
            shape={shape}
            color='primary'
            type={type}
            size={size}
            page={page}
          />
        )}
      />
    </PaginationWrapper>
  );
};

export default Pagination;
