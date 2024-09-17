import React, { Suspense } from 'react';

import Footer from '@/components/main/landing-page/footer/Footer';
import Navbar from '@/components/main/landing-page/navbar/navbar-main/Navbar';

import '@/styles/layouts/_main.scss';
import '@/index.scss';
import { Outlet } from 'react-router-dom';
import Breadcumbs from '@/components/main/collection/breadcumbs/Breadcumbs';
import useSticky from '@/composables/scroll/useSticky';
import BreadcumbsGreen from '@/components/main/collection/breadcumbs-green/BreadcumbsGreen';
import NavbarGreen from '@/components/main/landing-page/navbar/navbar-green/NavbarGreen';

interface IPropsMainLayout {
  settingPage?: boolean;
}

export const ProductDetailGreenLayout: React.FC<IPropsMainLayout> = () => {
  const isSticky = useSticky();
  return (
    <div className="main">
      <div className="layout">
        <header
          className="layout__header"
          style={
            isSticky
              ? {
                  position: 'sticky',
                  zIndex: 1000,
                  top: 0,
                  backgroundColor: '#white',
                  boxShadow: '1px 1px 1px gray',
                  border: 'none',
                }
              : { position: 'absolute', zIndex: 10 }
          }
        >
          <NavbarGreen></NavbarGreen>
        </header>
        <section className="layout__context">
          <BreadcumbsGreen
            title={'Product Detail'}
            position="Product Detail"
          ></BreadcumbsGreen>
          <div className="layout__content__context">
            <Suspense fallback={<></>}>
              <Outlet></Outlet>
            </Suspense>
          </div>
        </section>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};