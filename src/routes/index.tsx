import React from 'react';

import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';

import {
  AuthLayout,
  MainLayout,
  ProductDetailLayout,
  ProductListLayout,
  BlogListLayout,
  ContactUsLayout,
  FAQLayout,
  AboutUsLayout,
  ServiceLayout,
  GalleryLayout,
  CartLayout,
  WishListLayout,
  LoginLayout,
  RegisterLayout,
  BlogDetailLayout,
  ProductDetailYellowLayout,
  ProductDetailGreenLayout,
  ProductDetailWatchLayout,
  ProductDetailGrayLayout,
  ProductDetailBlue2Layout,
  ProductDetailRedLayout,
  ProductDetailBrownLayout,
  ProductDetailGreen2Layout,
  ProductDetailBrown2Layout,
  ProductDetailBrown3Layout,
  SubscriptionLayout,
  CheckoutLayout,
} from '@/layouts';

// Auth page
const SignIn = React.lazy(() => import('@/pages/auth/sign-in'));

// Main page
const LandingComponent = React.lazy(() => import('@/pages/landing-page'));
const CollectionComponent = React.lazy(() => import('@/pages/collections'));
const ProductListComponent = React.lazy(() => import('@/pages/product-list'));
const ProductDetailComponent = React.lazy(() => import('@/pages/detail'));
const BlogComponent = React.lazy(() => import('@/pages/blogs'));
const ContactUsComponent = React.lazy(() => import('@/pages/contact-us'));
const FAQComponent = React.lazy(() => import('@/pages/faq'));
const AboutUsComponent = React.lazy(() => import('@/pages/about-us'));
const ServiceComponent = React.lazy(() => import('@/pages/service'));
const BlogDetailComponent = React.lazy(() => import('@/pages/blog-detail'));
const GalleryComponent = React.lazy(() => import('@/pages/gallery'));
const CartComponent = React.lazy(() => import('@/pages/cart'));
const WishlistComponent = React.lazy(() => import('@/pages/wishlist'));
const LoginComponent = React.lazy(() => import('@/pages/login'));
const RegisterComponent = React.lazy(() => import('@/pages/register'));
const SubscriptionComponent = React.lazy(() => import('@/pages/subscription'));
const CheckoutComponent = React.lazy(() => import('@/pages/checkout'));
const ProductDetailComponent2 = React.lazy(
  () => import('@/pages/product-detail-2'),
);
const ProductDetailComponent3 = React.lazy(
  () => import('@/pages/product-detail-3'),
);
const ProductDetailComponent4 = React.lazy(
  () => import('@/pages/product-detail-4'),
);
const ProductDetailComponent5 = React.lazy(
  () => import('@/pages/product-detail-5'),
);
const ProductDetailComponent6 = React.lazy(
  () => import('@/pages/product-detail-6'),
);
const ProductDetailComponent7 = React.lazy(
  () => import('@/pages/product-detail-7'),
);
const ProductDetailComponent8 = React.lazy(
  () => import('@/pages/product-detail-8'),
);
const ProductDetailComponent9 = React.lazy(
  () => import('@/pages/product-detail-9'),
);
const ProductDetailComponent10 = React.lazy(
  () => import('@/pages/product-detail-10'),
);
const ProductDetailComponent11 = React.lazy(
  () => import('@/pages/product-detail-11'),
);
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
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <ProductDetailLayout />
      </>
    ),
    children: [
      {
        path: '/products/drone/:name',
        element: <ProductDetailComponent />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <ProductDetailBlue2Layout />
      </>
    ),
    children: [
      {
        path: '/products/cam-mod-by-kryptonite-vapor',
        element: <ProductDetailComponent2 />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <ProductDetailGrayLayout />
      </>
    ),
    children: [
      {
        path: '/products/driptip-kryptonite-1',
        element: <ProductDetailComponent3 />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <ProductDetailWatchLayout />
      </>
    ),
    children: [
      {
        path: '/products/driptip-kryptonite-2',
        element: <ProductDetailComponent4 />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <ProductDetailYellowLayout />
      </>
    ),
    children: [
      {
        path: '/products/driptip-kryptonite',
        element: <ProductDetailComponent5 />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <ProductDetailGreenLayout />
      </>
    ),
    children: [
      {
        path: '/products/mod-cam-by-kryptonite-vapor',
        element: <ProductDetailComponent6 />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <ProductDetailRedLayout />
      </>
    ),
    children: [
      {
        path: '/products/drink-de-energy-health-strength',
        element: <ProductDetailComponent7 />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <ProductDetailBrownLayout />
      </>
    ),
    children: [
      {
        path: '/products/coil-master-kbag',
        element: <ProductDetailComponent8 />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <ProductDetailGreen2Layout />
      </>
    ),
    children: [
      {
        path: '/products/cleansers-de-nano',
        element: <ProductDetailComponent9 />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <ProductDetailBrown2Layout />
      </>
    ),
    children: [
      {
        path: '/products/brewer-ce251-60-oz-12-cup-coffee-maker-1',
        element: <ProductDetailComponent10 />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <ProductDetailBrown3Layout />
      </>
    ),
    children: [
      {
        path: '/products/cam-mod-by-kryptonite-vapor-1',
        element: <ProductDetailComponent11 />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <BlogListLayout />
      </>
    ),
    children: [
      {
        path: '/blogs/news',
        element: <BlogComponent />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <ContactUsLayout />
      </>
    ),
    children: [
      {
        path: '/pages/contact-us',
        element: <ContactUsComponent />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <FAQLayout />
      </>
    ),
    children: [
      {
        path: '/pages/faqs',
        element: <FAQComponent />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <AboutUsLayout />
      </>
    ),
    children: [
      {
        path: '/pages/about-us',
        element: <AboutUsComponent />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <ServiceLayout />
      </>
    ),
    children: [
      {
        path: '/pages/services',
        element: <ServiceComponent />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <BlogDetailLayout />
      </>
    ),
    children: [
      {
        path: '/blogs/news/:name',
        element: <BlogDetailComponent />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <GalleryLayout />
      </>
    ),
    children: [
      {
        path: '/pages/gallery',
        element: <GalleryComponent />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <CartLayout />
      </>
    ),
    children: [
      {
        path: '/cart',
        element: <CartComponent />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <WishListLayout />
      </>
    ),
    children: [
      {
        path: '/pages/wishlist',
        element: <WishlistComponent />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <LoginLayout />
      </>
    ),
    children: [
      {
        path: '/account/login',
        element: <LoginComponent />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <RegisterLayout />
      </>
    ),
    children: [
      {
        path: '/account/register',
        element: <RegisterComponent />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <SubscriptionLayout />
      </>
    ),
    children: [
      {
        path: '/hiring/subscription',
        element: <SubscriptionComponent />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
  {
    errorElement: <></>,
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <CheckoutLayout />
      </>
    ),
    children: [
      {
        path: '/checkout',
        element: <CheckoutComponent />,
      },
      { path: '*', element: <PageNotFound /> },
    ],
  },
]);
