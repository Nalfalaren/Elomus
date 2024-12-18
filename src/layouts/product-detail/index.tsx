import React, { Suspense } from 'react';

import Footer from '@/components/main/landing-page/footer/Footer';
import Navbar from '@/components/main/landing-page/navbar/navbar-main/Navbar';

import '@/styles/layouts/_main.scss';
import '@/index.scss';
import { Outlet, useLocation } from 'react-router-dom';

// eslint-disable-next-line import/order
import Breadcumbs from '@/components/main/collection/breadcumbs/Breadcumbs';
import { convertUrlToTitle } from '@/composables/convert/ConvertURL';
import useSticky from '@/composables/scroll/useSticky';

interface IPropsMainLayout {
  settingPage?: boolean;
}

export const ProductDetailLayout: React.FC<IPropsMainLayout> = () => {
  const isSticky = useSticky();
  const location = useLocation();
  const title = decodeURIComponent(convertUrlToTitle(location.pathname));

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
        <section className="layout__context">
          <Breadcumbs title={title} position={title}></Breadcumbs>
          <div>
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
