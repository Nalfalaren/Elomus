import React, { Suspense } from 'react';

import Footer from '@/components/main/landing-page/footer/Footer';
import Navbar from '@/components/main/landing-page/navbar/navbar-main/Navbar';
import '@/styles/layouts/_product-list.scss';
import '@/index.scss';
import { Outlet, useLocation } from 'react-router-dom';

import CategorySidebar from '@/components/main/product-list-detail/sidebar/items/web/CategorySidebar';
import Breadcumbs from '@/components/main/collection/breadcumbs/Breadcumbs';
import Sidebar from '@/components/main/blog-detail/sidebar/Sidebar';
import useSticky from '@/composables/scroll/useSticky';
import { convertUrlToTitle } from '@/composables/convert/ConvertURL';

interface IPropsMainLayout {
  settingPage?: boolean;
}

export const BlogDetailLayout: React.FC<IPropsMainLayout> = () => {
  const isSticky = useSticky();
  const location = useLocation();
  const url = convertUrlToTitle(location.pathname);
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
          <Breadcumbs title={url} position={url}></Breadcumbs>
          <div className="layout__content__context">
            <aside>
              <Sidebar></Sidebar>
          </aside>
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
