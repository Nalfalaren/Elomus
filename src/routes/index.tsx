import React from 'react';

import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';

import { AuthLayout, MainLayout, ProductListLayout } from '@/layouts';

// Auth page
const SignIn = React.lazy(() => import('@/pages/auth/sign-in'));

// Main page
const LandingComponent = React.lazy(() => import('@/pages/landing-page'));
const CollectionComponent = React.lazy(() => import('@/pages/collections'));
const ProductListComponent = React.lazy(() => import('@/pages/product-list'));
// Other page
const PageNotFound = React.lazy(
  () => import('@/pages/error-page/PageNotFound'),
);

export const router = createBrowserRouter([
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <MainLayout />
      </>
    ),
    children: [
      {
        path: '/',
        element: <LandingComponent />,
      },
      {
        path: '/collections',
        element: <CollectionComponent />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <ProductListLayout />
      </>
    ),
    children: [
      {
        path: '/collections/:name',
        element: <ProductListComponent />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
]);

