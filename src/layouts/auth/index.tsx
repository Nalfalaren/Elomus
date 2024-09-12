import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

export const AuthLayout: React.FC = () => {
  return (
    <Suspense fallback={<></>}>
      <Outlet />
    </Suspense>
  );
};
