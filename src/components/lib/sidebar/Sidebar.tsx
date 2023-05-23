import { Icon } from '@iconify/react';

import SidebarLink from '../sidebarLink/SidebarLink';
import ThrindleLogo from '../../shared/ThrindleLogo/ThrindleLogo';

export type SingleSidebarLink = {
  id: number;
  link: string;
  title: string;
  activeIcon: string;
  icon: string;
  index?: boolean;
};

const sidebarLinks: SingleSidebarLink[] = [
  {
    id: 1,
    link: '/',
    title: 'Dashboard',
    activeIcon: 'ph:squares-four-fill',
    icon: 'ph:squares-four',
    index: true,
  },
  {
    id: 2,
    link: '/orders',
    title: 'Orders',
    activeIcon: 'ph:basket-fill',
    icon: 'ph:basket',
  },
  {
    id: 3,
    link: '/customers',
    title: 'Customers',
    activeIcon: 'ph:users-three-fill',
    icon: 'ph:users-three',
  },
  {
    id: 4,
    link: '/profile',
    title: 'Profile',
    activeIcon: 'ph:user-circle-fill',
    icon: 'ph:user-circle',
  },
];

type SidebarType = React.FC;

const Sidebar: SidebarType = () => {
  return (
    <aside className='bg-primary-blue col-span-1 col-start-1 flex h-full flex-col gap-20 pb-24 pt-8 text-white'>
      <div className='px-6'>
        <ThrindleLogo variant='white' />
      </div>

      <nav className='pl-6'>
        <ul className='flex flex-col gap-6'>
          {/* <li className='text-blue text-primary-blue w-full rounded-l-lg bg-white px-4 py-3'> */}
          {sidebarLinks.map((item) => {
            return (
              <li key={item.id}>
                <SidebarLink {...item} />
              </li>
            );
          })}
        </ul>
      </nav>

      <button className='focus:text-primary-blue hover:text-primary-blue group mx-auto mt-auto flex flex-row items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold outline-none hover:bg-white hover:ring-white focus:bg-white focus:ring focus:ring-white xl:text-base'>
        <span className='transition-transform duration-500 group-hover:-rotate-45 group-focus-visible:-rotate-45'>
          <Icon icon='ph:sign-out' />
        </span>
        <span className='transition-transform duration-500 group-hover:translate-x-1 group-focus-visible:translate-x-1'>
          Log Out
        </span>
      </button>
    </aside>
  );
};

export default Sidebar;
