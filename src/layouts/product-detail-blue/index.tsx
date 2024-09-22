import React, { Suspense } from 'react';

import Footer from '@/components/main/landing-page/footer/Footer';
import Navbar from '@/components/main/landing-page/navbar/navbar-blue/Navbar';

import '@/styles/layouts/_product-detail-blue.scss';
import '@/index.scss';
import { Outlet, useLocation } from 'react-router-dom';
import Breadcumbs from '@/components/main/collection/breadcumbs/Breadcumbs';
import useSticky from '@/composables/scroll/useSticky';
import { convertUrlToTitle } from '@/composables/convert/ConvertURL';
import BreadcumbsWatch from '@/components/main/collection/breadcumbs-watch/Breadcumbs';

interface IPropsMainLayout {
  settingPage?: boolean;
}

export const ProductDetailWatchLayout: React.FC<IPropsMainLayout> = () => {
  const isSticky = useSticky();
  const location = useLocation();
  const title = convertUrlToTitle(location.pathname);

  return (
    <div className="product-detail-blue">
      <div className="layout">
        <header
          className="layout__header"
          style={
            isSticky
              ? {
                  position: 'sticky',
                  zIndex: 1000,
                  top: 0,
                  backgroundColor: '#128AED',
                  padding: '0.5rem',
                }
              : { position: 'absolute', zIndex: 10, padding: '1.5rem' }
          }
        >
          <Navbar></Navbar>
        </header>
        <section className="layout__content">
          <BreadcumbsWatch title={title} position={title}></BreadcumbsWatch>
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
