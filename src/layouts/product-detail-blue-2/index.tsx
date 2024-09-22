import React, { Suspense } from 'react';

import Footer from '@/components/main/landing-page/footer/Footer';
import Navbar from '@/components/main/landing-page/navbar/navbar-blue-2/Navbar';

import '@/styles/layouts/_product-detail-blue-2.scss';
import '@/index.scss';
import { Outlet, useLocation } from 'react-router-dom';

import Breadcumbs from '@/components/main/collection/breadcumbs/Breadcumbs';
import BreadcumbsGreen from '@/components/main/collection/breadcumbs-green/BreadcumbsGreen';
import { convertUrlToTitle } from '@/composables/convert/ConvertURL';
import useSticky from '@/composables/scroll/useSticky';
import BreadcumbsBlue2 from '@/components/main/collection/breadcumbs-blue-2/Breadcumbs';

interface IPropsMainLayout {
  settingPage?: boolean;
}

export const ProductDetailBlue2Layout: React.FC<IPropsMainLayout> = () => {
  const isSticky = useSticky();
  const location = useLocation();
  const title = convertUrlToTitle(location.pathname);
  return (
    <div className="product-detail-blue-2">
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
                  padding: '0.5rem',
                }
              : { position: 'absolute', zIndex: 10, padding: '1.5rem' }
          }
        >
          <Navbar></Navbar>
        </header>
        <section className="layout__content">
          <BreadcumbsBlue2 title={title} position={title}></BreadcumbsBlue2>
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
