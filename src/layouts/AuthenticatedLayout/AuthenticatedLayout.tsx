import { PropsWithChildren } from 'react';

import Sidebar from '@/components/lib/sidebar';
import TopNav from '@/components/lib/topNav';

type AuthenticatedLayoutType = React.FC<PropsWithChildren>;

const AuthenticatedLayout: AuthenticatedLayoutType = ({ children }) => (
  <div className='layout_container'>
    <div className='layout_container_width'>
      <div className='layout_wrapper'>
        <Sidebar />
        <div className='main_content_wrapper overflow-hidden bg-white'>
          <TopNav />
          <div className='bg-primary-grey h-full w-full overflow-hidden'>
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AuthenticatedLayout;
