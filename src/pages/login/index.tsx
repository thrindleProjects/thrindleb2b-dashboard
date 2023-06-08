import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';

import LoginLayout from '@/layouts/loginLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const Login: NextPageWithLayout = () => {
  return <LoginLayout />;
};

Login.getLayout = function (page) {
  return <>{page}</>;
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
