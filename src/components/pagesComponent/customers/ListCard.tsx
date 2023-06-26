import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';

import { BorderedContainer } from '@/components/shared/borderedContainer';

import { useGetOrderByIdQuery } from '@/api/orders';
import { formatDateWithYear } from '@/utils/functions';

export interface IListCard {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const ListCard: React.FC<IListCard> = ({ active, setActive }) => {
  const router = useRouter();
  const { data } = useGetOrderByIdQuery(router.query.orderId as string);

  useEffect(() => {
    if (data) {
      setActive(data.data.listItems[0].id);
    }
  }, [data, setActive]);
  return (
    <div className='mt-6'>
      {data &&
        data.data.listItems.map((item, index) => (
          <BorderedContainer
            onClick={() => setActive(item.id)}
            className={`mt-6 cursor-pointer rounded-[8px] p-6 ${
              active === item.id ? 'border-primary-blue' : ''
            }`}
            key={index}
          >
            <div className='flex justify-between '>
              <div className=' w-[90%] '>
                <div className='flex gap-4'>
                  <Image
                    alt='image'
                    src='/assets/svg/chair.svg'
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className='text-[16px] font-[500]'>{item.name}</p>
                    <p className='text-[14px] font-[300] text-black/60'>
                      {formatDateWithYear(item.createdAt)}
                    </p>
                  </div>
                </div>

                <p className='mt-2 text-[12px] font-[500] text-black/60 '>
                  {item.description}
                </p>
                <p className='text-primary-blue mt-2 w-max rounded-[8px] bg-[#ebf2f9] p-3 text-[16px] font-[600]'>
                  {item.quantity} Pieces
                </p>
              </div>
              <BorderedContainer className='h-max rounded-lg  p-2'>
                <p
                  className={
                    item.isAvailable
                      ? 'text-primary-green text-[12px] font-[500]'
                      : 'text-primary-red text-[12px] font-[500]'
                  }
                >
                  {item.isAvailable ? 'Available' : 'Not Available'}
                </p>
              </BorderedContainer>
            </div>
          </BorderedContainer>
        ))}
    </div>
  );
};

export default ListCard;
