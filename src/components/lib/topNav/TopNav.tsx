import { Icon } from '@iconify/react';

import InputSearch from '@/components/shared/InputSearch/InputSearch';

const TopNav: React.FC = () => {
  return (
    <div className='flex flex-row items-center justify-between bg-white px-10 py-6'>
      <div className='w-1/3'>
        <InputSearch placeholder='Search' />
      </div>

      <div className='flex flex-row items-center gap-4'>
        <button
          className='text-primary-blue rounded-lg p-2 text-sm underline outline-none focus:ring xl:text-base'
          type='button'
        >
          Switch to thrindle.com
        </button>
        <button
          type='button'
          className='text-primary-black bg-primary-grey grid aspect-square w-12  place-items-center rounded-full text-sm outline-none focus:ring xl:text-base'
        >
          <Icon icon='ph:bell' />
        </button>

        <section className='flex flex-row items-center gap-3'>
          <h5 className='bg-primary-blue/80 grid aspect-square w-12 flex-shrink-0 cursor-default place-items-center rounded-full p-2 text-sm font-medium text-white xl:text-base'>
            YO
          </h5>
          <p className='flex flex-col'>
            <span className='text-primary-black text-sm font-medium xl:text-base'>
              Yinka Olalere
            </span>
            <span className='text-primary-black/60 text-xs font-medium xl:text-sm'>
              Admin
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TopNav;
