import React, { Suspense } from 'react';

import Footer from '@/components/main/landing-page/footer/Footer';
import Navbar from '@/components/main/landing-page/navbar/navbar-main/Navbar';
import '@/styles/layouts/_product-list.scss';
import '@/index.scss';
import { Outlet } from 'react-router-dom';

import CategorySidebar from '@/components/main/product-list-detail/sidebar/items/web/CategorySidebar';
import Breadcumbs from '@/components/main/collection/breadcumbs/Breadcumbs';
import useSticky from '@/composables/scroll/useSticky';

interface IPropsMainLayout {
  settingPage?: boolean;
}

export const ServiceLayout: React.FC<IPropsMainLayout> = () => {
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
                  backgroundColor: '#21b3f1',
                }
              : { position: 'absolute', zIndex: 10 }
          }
        >
          <Navbar></Navbar>
        </header>
        <section className="layout__content">
          <Breadcumbs title={'Services'} position="Services"></Breadcumbs>
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
