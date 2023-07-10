import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

import { useOrderStatusHook } from '@/hooks';

import MainError from '@/components/shared/error/MainError';
import { SpinnerLoader } from '@/components/shared/loader';
import Pagination from '@/components/shared/Pagination/Pagination';
import { TabContainer } from '@/components/shared/statusTab';
import Table from '@/components/shared/Table';
import TableBody from '@/components/shared/Table/TableBody';
import TableCell from '@/components/shared/Table/TableCell';
import TableHeader from '@/components/shared/Table/TableHeader';
import TableRow from '@/components/shared/Table/TableRow';
import { WhiteCard } from '@/components/shared/whiteCard';

import { orderStatus } from '@/@types/appTypes';
import { useGetOrdersQuery } from '@/api/orders';
import { ORDERS_PER_PAGE } from '@/constant';
import { formatDateWithYear, getQueryParams } from '@/utils/functions';
import { getErrorMessage } from '@/utils/networkHandler';
// import { orderStatus } from '@/@types';
// import { dashboardData } from '@/utils/devData';
import { dashboardTableHeaderData } from '@/utils/productionData';

const DashboardTable = () => {
  const [activeTab, setActiveTab] = useState<orderStatus>('all');
  const { query, push, asPath } = useRouter();

  const { page } = query;

  const currentPage: number = useMemo(() => Number(page) || 1, [page]);

  const { data, isLoading, refetch, isError, error } = useGetOrdersQuery({
    page: currentPage,
    limit: ORDERS_PER_PAGE,
    status: activeTab,
  });

  const changeTab = (val: orderStatus) => {
    const [asPathUrl, asPathQuery] = asPath.split('?');
    const resolvedQuery = getQueryParams(asPathQuery ?? '');
    setActiveTab(val);
    push({
      pathname: asPathUrl,
      query: { ...resolvedQuery, page: 1 },
    });
  };

  const colorPicker = (status: orderStatus) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useOrderStatusHook({
      orderStatus: status,
    }).orderStyle.textColor;
  };

  return (
    <section className=' w-full'>
      <WhiteCard>
        {/* Header */}
        <div className='flex w-full flex-col justify-between lg:flex-row lg:items-center'>
          <h6 className='font-clash-grotesk text-base font-medium text-black '>
            Recent Orders
          </h6>
          <div className='mt-4 md:w-[100%] lg:mt-0 lg:w-[80%] xl:w-[80%]'>
            <TabContainer
              className='w-full bg-[#F9F9F9]'
              activeTab={activeTab}
              changeTab={changeTab}
            />
          </div>
        </div>
        {/* Table */}
        {isLoading && (
          <div className='mt-20 flex w-full items-center justify-center'>
            <SpinnerLoader type='default' />
          </div>
        )}

        {!isError && !isLoading && data && data?.data?.data?.length > 0 && (
          <div className='mt-5 w-full'>
            <Table>
              <TableHeader items={dashboardTableHeaderData} />
              <TableBody>
                {data?.data?.data?.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>#{item?.orderRefCode}</TableCell>
                    <TableCell>
                      {item?.company && item?.company?.companyName
                        ? item?.company?.companyName
                        : 'N/A'}
                    </TableCell>
                    <TableCell>{item?.listItems?.length}</TableCell>
                    <TableCell>{formatDateWithYear(item?.createdAt)}</TableCell>
                    <TableCell>
                      ₦{item?.subtotal?.toLocaleString() ?? 0.0}
                    </TableCell>
                    <TableCell>
                      <p
                        className={`${colorPicker(
                          item?.orderStatus as orderStatus
                        )}`}
                      >
                        {
                          // eslint-disable-next-line react-hooks/rules-of-hooks
                          useOrderStatusHook({
                            orderStatus: item?.orderStatus as orderStatus,
                          }).orderStyle.text
                        }
                      </p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className='mt-5 flex w-full flex-row justify-end'>
              <Pagination count={data?.data?.lastpage || 1} />
            </div>
          </div>
        )}
        {!isError && !isLoading && data && data?.data?.data?.length === 0 && (
          <div className='text-primary-blue/80 mt-14 text-center text-3xl font-semibold'>
            Nothing to see here
          </div>
        )}
        {isError && !isLoading && (
          <MainError
            message={getErrorMessage(error)}
            retry={refetch}
            className='mt-10'
          />
        )}
      </WhiteCard>
    </section>
  );
};

export default DashboardTable;
