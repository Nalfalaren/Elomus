import React, { Suspense } from 'react';

import Footer from '@/components/main/landing-page/footer/Footer';
import Navbar from '@/components/main/landing-page/navbar/navbar-gray/Navbar';

import '@/styles/layouts/_product-detail-blue.scss';
import '@/index.scss';
import { Outlet, useLocation } from 'react-router-dom';
import useSticky from '@/composables/scroll/useSticky';
import { convertUrlToTitle } from '@/composables/convert/ConvertURL';
import BreadcumbsYellow from '@/components/main/collection/breadcumbs-yellow/Breadcumbs';
import BreadcumbsWhite from '@/components/main/collection/breadcumbs-white/Breadcumbs';

interface IPropsMainLayout {
  settingPage?: boolean;
}

export const ProductDetailGrayLayout: React.FC<IPropsMainLayout> = () => {
  const isSticky = useSticky();
  const location = useLocation();
  const title = convertUrlToTitle(location.pathname);

  return (
    <div className="product-detail-gray">
      <div className="layout">
        <header
          className="layout__header"
          style={
            isSticky
              ? {
                  position: 'sticky',
                  zIndex: 1000,
                  top: 0,
                  backgroundColor: '#7E7E7E',
                }
              : { position: 'absolute', padding: '1.5rem', zIndex: 10 }
          }
        >
          <Navbar></Navbar>
        </header>
        <section className="layout__content">
          <BreadcumbsWhite title={''} position={''}></BreadcumbsWhite>
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
