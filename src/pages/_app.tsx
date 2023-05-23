import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode } from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  const getLayout =
    Component.getLayout ??
    ((page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>);
  return <>{getLayout(<Component {...pageProps} key={router.pathname} />)}</>;
}

export default MyApp;
