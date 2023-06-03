import { PropsWithChildren } from 'react';

import Sidebar from '@/components/lib/sidebar';
import TopNav from '@/components/lib/topNav';

import { useMediaQuery } from '@/utils/hooks';

type AuthenticatedLayoutType = React.FC<PropsWithChildren>;

const AuthenticatedLayout: AuthenticatedLayoutType = ({ children }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  if (isMobile) {
    return (
      <div className='text-md flex h-screen w-screen items-center justify-center'>
        <p> This Web App can't be viewed on mobile screens.</p>
      </div>
    );
  }

  return (
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
};

export default AuthenticatedLayout;
