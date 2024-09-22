import React, { Suspense } from 'react';

import Footer from '@/components/main/landing-page/footer/Footer';
import Navbar from '@/components/main/landing-page/navbar/navbar-main/Navbar';

import '@/styles/layouts/_product-detail-green.scss';
import '@/index.scss';
import { Outlet, useLocation } from 'react-router-dom';

import Breadcumbs from '@/components/main/collection/breadcumbs/Breadcumbs';
import BreadcumbsGreen from '@/components/main/collection/breadcumbs-green/BreadcumbsGreen';
import NavbarGreen from '@/components/main/landing-page/navbar/navbar-green/NavbarGreen';
import { convertUrlToTitle } from '@/composables/convert/ConvertURL';
import useSticky from '@/composables/scroll/useSticky';

interface IPropsMainLayout {
  settingPage?: boolean;
}

export const ProductDetailGreenLayout: React.FC<IPropsMainLayout> = () => {
  const isSticky = useSticky();
  const location = useLocation();
  const title = convertUrlToTitle(location.pathname);
  return (
    <div className="product-detail-green">
      <div className="layout">
        <header
          className="layout__header"
          style={
            isSticky
              ? {
                  position: 'sticky',
                  zIndex: 1000,
                  top: 0,
                  backgroundColor: 'white',
                  borderColor: '#e8e8e8',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                }
              : { position: 'absolute', zIndex: 10 }
          }
        >
          <NavbarGreen></NavbarGreen>
        </header>
        <section className="layout__content">
          <BreadcumbsGreen position={title}></BreadcumbsGreen>
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
