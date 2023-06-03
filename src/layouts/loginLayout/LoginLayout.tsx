import LoginForm from '@/components/lib/loginForm';
import ThrindleLogo from '@/components/shared/ThrindleLogo';

import { useMediaQuery } from '@/utils/hooks';

const LoginLayout = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) {
    return (
      <div className='text-md flex h-screen w-screen items-center justify-center'>
        <p> This Web App can't be viewed on mobile screens.</p>
      </div>
    );
  }

  return (
    <div className='layout_container'>
      <div className='bg-secondary-grey layout_container_width grid grid-cols-1 grid-rows-[auto_1fr] py-14'>
        <div className='px-16'>
          <ThrindleLogo variant='blue' />
        </div>
        <section className='no-scrollbar grid h-full w-full place-items-center overflow-y-auto px-16'>
          <div className='flex flex-col bg-white px-10 py-12 md:w-5/6 md:gap-3 lg:w-3/5 xl:w-2/5 xl:gap-5'>
            <h2 className='text-primary-blue text-center font-semibold md:text-lg lg:text-xl xl:text-2xl'>
              Welcome Back, Admin
            </h2>
            <p className='text-primary-black/80 text-center font-medium md:text-sm lg:text-base xl:text-lg'>
              Log in your account
            </p>
            <LoginForm />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginLayout;
