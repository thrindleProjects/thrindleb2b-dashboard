import { useRouter } from 'next/router';

import SingleOrderListItem from '@/components/lib/singleOrderListItem';

import { useGetOrderByIdQuery } from '@/api/orders';

const SingleOrderList: React.FC = () => {
  const { query } = useRouter();

  const { orderId } = query;

  const { data } = useGetOrderByIdQuery(orderId as string, {
    skip: !orderId,
    refetchOnFocus: false,
    refetchOnMountOrArgChange: false,
  });

  return (
    <section className='grid h-full w-full grid-cols-1 grid-rows-[auto_1fr] rounded-lg bg-white'>
      <h5 className='text-primary-black px-8 text-base font-medium xl:text-lg'>
        <span className='border-b-primary-black/10 inline-block w-full border-b py-5'>
          Item List
        </span>
      </h5>
      <div className='no-scrollbar flex flex-col gap-5 overflow-auto px-8 py-8'>
        {data &&
          data.data.listItems.map((product, index) => {
            return (
              <SingleOrderListItem
                key={product.id}
                {...product}
                index={index}
              />
            );
          })}
      </div>
    </section>
  );
};

export default SingleOrderList;
