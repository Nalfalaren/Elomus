import React, { Suspense } from 'react';

import Footer from '@/components/main/landing-page/footer/Footer';
import Navbar from '@/components/main/landing-page/navbar/navbar-brown-2/Navbar';

import '@/styles/layouts/_product-detail-brown.scss';
import '@/index.scss';
import { Outlet, useLocation } from 'react-router-dom';
import { convertUrlToTitle } from '@/composables/convert/ConvertURL';
import useSticky from '@/composables/scroll/useSticky';
import BreadcumbsBrown2 from '@/components/main/collection/breadcumbs-brown-2 copy/Breadcumbs';

interface IPropsMainLayout {
  settingPage?: boolean;
}

export const ProductDetailBrown3Layout: React.FC<IPropsMainLayout> = () => {
  const isSticky = useSticky();
  const location = useLocation();
  const title = convertUrlToTitle(location.pathname);
  return (
    <div className="product-detail-brown">
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
          <BreadcumbsBrown2 title={title} position={title}></BreadcumbsBrown2>
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
