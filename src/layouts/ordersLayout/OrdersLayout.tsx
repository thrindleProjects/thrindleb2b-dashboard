import { PropsWithChildren } from 'react';

import OrderNavItem from '@/components/lib/orderNavItem/OrderNavItem';
import PaddedContainer from '@/components/shared/PaddedContainer';

import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';

type OrdersLayoutType = React.FC<PropsWithChildren>;

export type OrderNavType = {
  id: number;
  title: string;
  link: string;
  index?: boolean;
};

const ordersNav: OrderNavType[] = [
  {
    id: 1,
    title: 'Pending',
    link: '/orders',
    index: true,
  },
  {
    id: 2,
    title: 'Requested',
    link: '/orders/requested',
  },
  {
    id: 3,
    title: 'Recurrent',
    link: '/orders/recurrent',
  },
  {
    id: 4,
    title: 'Completed',
    link: '/orders/completed',
  },
];

const OrdersLayout: OrdersLayoutType = ({ children }) => {
  return (
    <AuthenticatedLayout>
      <PaddedContainer>
        <section className='flex flex-col gap-8'>
          <h3 className='text-primary-black text-xl font-semibold xl:text-2xl'>
            Orders
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

export default OrdersLayout;
