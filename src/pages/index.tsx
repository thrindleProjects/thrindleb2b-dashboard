import * as React from 'react';

import Layout from '@/components/layout/Layout';

import { DashboardLayout } from '@/layouts/dashboardLayout';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      {/* <Seo /> */}

      <main>
        <DashboardLayout />
      </main>
    </Layout>
  );
}
