import { PropsWithChildren } from 'react';

import OrderNavItem from '@/components/lib/orderNavItem/OrderNavItem';
import PaddedContainer from '@/components/shared/PaddedContainer';

import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';

type RecurrentLayoutType = React.FC<PropsWithChildren>;

export type RecurrentOrderNavType = {
  id: number;
  title: string;
  link: string;
  index?: boolean;
  label: string;
};

const ordersNav: RecurrentOrderNavType[] = [
  {
    id: 1,
    title: 'Pending',
    link: '/recurrent',
    index: true,
    label: 'Customer has paid but we have not delivered',
  },
  {
    id: 2,
    title: 'Requested',
    link: '/recurrent/requested',
    label: 'Any order that we have not given quotation to',
  },
  {
    id: 3,
    title: 'In Progress',
    link: '/recurrent/in-progress',
    label: 'Payment has not been made',
  },
  {
    id: 4,
    title: 'Completed',
    link: '/recurrent/completed',
    label: 'Successful Orders',
  },
  {
    id: 5,
    title: 'VIP',
    link: '/recurrent/vip',
    label: 'Delivery made, but payment expected on a later date',
  },
  {
    id: 6,
    title: 'Cancelled',
    link: '/recurrent/cancelled',
    label: 'Cancelled Orders',
  },
];

const RecurrentOrdersLayout: RecurrentLayoutType = ({ children }) => {
  return (
    <AuthenticatedLayout>
      <PaddedContainer>
        <section className='flex flex-col gap-8'>
          <h3 className='text-primary-black text-xl font-semibold xl:text-2xl'>
            Recurrent Orders
          </h3>
          <nav>
            <ul className='flex w-max gap-2 rounded-lg bg-white px-8 py-2'>
              {ordersNav.map((nav) => {
                return <OrderNavItem {...nav} key={nav.id} />;
              })}
            </ul>
          </nav>
          {children}
        </section>
      </PaddedContainer>
    </AuthenticatedLayout>
  );
};

export default RecurrentOrdersLayout;
