import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { WhiteCard } from '@/components/shared/whiteCard';

import { useGetOrderByIdQuery } from '@/api/orders';
import { IMAGE_URL } from '@/constant';

export interface IListCard {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}
const CardDetails: React.FC<IListCard> = ({ active }) => {
  const router = useRouter();

  const { data } = useGetOrderByIdQuery(router.query.orderId as string);

  const singleItemToRender = data?.data.listItems.filter(
    (item: { id: string }) => item.id === active
  );
  return (
    <WhiteCard className='h-full overflow-y-auto px-6'>
      <p className='text-[16px] font-[500]'>
        {singleItemToRender && singleItemToRender[0]?.name}
      </p>
      <div className='relative mt-10 flex h-[127px] w-[127px] gap-4'>
        {singleItemToRender &&
          singleItemToRender[0]?.images.map((item, index) => (
            <Image
              src={`${IMAGE_URL}/${item}`}
              alt=''
              key={index}
              fill={true}
            />
          ))}
      </div>
      <div className='mt-5'>
        <p className='text-[16px] font-[600]'>
          {singleItemToRender && singleItemToRender[0]?.name}
        </p>
        <p className='w-[90%] text-[14px] text-black/60'>
          {singleItemToRender && singleItemToRender[0]?.description}
        </p>
        <p className='mt-6 text-[16px] font-[600]'>
          {singleItemToRender && singleItemToRender[0]?.quantity} pieces
        </p>
        {/* input will be here */}
      </div>
    </WhiteCard>
  );
};

export default CardDetails;
