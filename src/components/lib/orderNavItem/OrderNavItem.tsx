import Link from 'next/link';

import { OrderNavType } from '@/layouts/ordersLayout';
import useCheckLinkActive from '@/utils/hooks/useCheckLinkActive';

type OrderNavItemType = React.FC<OrderNavType>;

const OrderNavItem: OrderNavItemType = ({ index, link, title }) => {
  const isActive = useCheckLinkActive(link, link, index);

  return (
    <li className='inline-flex'>
      <Link
        href={link}
        className={`focus-visible:ring-primary-blue rounded-lg px-5 py-3 text-xs font-medium outline-none focus-visible:ring xl:text-sm ${
          isActive
            ? 'bg-primary-blue text-white'
            : 'text-primary-black/60 bg-white'
        }`}
      >
        {title}
      </Link>
    </li>
  );
};

export default OrderNavItem;
