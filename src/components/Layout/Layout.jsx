import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
