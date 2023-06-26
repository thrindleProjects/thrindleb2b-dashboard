import { useRouter } from 'next/router';

import SingleRecurrentOrderListItem from '@/components/lib/singleRecurrentOrderListItem';

import { useGetRecurrentOrderByIdQuery } from '@/api/orders';

const SingleRecurrentOrderList: React.FC = () => {
  const { query } = useRouter();

  const { recurrentId } = query;

  const { data } = useGetRecurrentOrderByIdQuery(recurrentId as string, {
    skip: !recurrentId,
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
              <SingleRecurrentOrderListItem
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

export default SingleRecurrentOrderList;
