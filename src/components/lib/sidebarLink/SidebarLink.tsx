import { Icon } from '@iconify/react';
import Link from 'next/link';

import useCheckLinkActive from '@/hooks/useCheckLinkActive';

import { SingleSidebarLink } from '../sidebar/Sidebar';
type SidebarLinkProps = SingleSidebarLink;

type SidebarLinkType = React.FC<SidebarLinkProps>;

const SidebarLink: SidebarLinkType = ({
  activeIcon,
  icon,
  link,
  title,
  index,
}) => {
  const isActive = useCheckLinkActive(link, link, index);

  return (
    <Link href={link} className='group rounded-l-lg'>
      <span
        className={`flex w-full items-center gap-2 rounded-l-lg px-4 py-3 text-sm font-semibold xl:text-base ${
          isActive ? 'text-primary-blue bg-white' : 'bg-transparent text-white'
        }`}
      >
        <span className='transition-transform duration-500 group-hover:rotate-45 group-focus-visible:rotate-45'>
          <Icon icon={isActive ? activeIcon : icon} />
        </span>
        <span className='transition-transform duration-500 group-hover:translate-x-1 group-focus-visible:translate-x-1'>
          {title}
        </span>
      </span>
    </Link>
  );
};

export default SidebarLink;
