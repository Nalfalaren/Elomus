import React, { Suspense } from 'react';

import Footer from '@/components/main/landing-page/footer/Footer';
import Navbar from '@/components/main/landing-page/navbar/Navbar';
import '@/styles/layouts/_product-list.scss';
import '@/index.scss';
import { Outlet } from 'react-router-dom';

import CategorySidebar from '@/components/main/product-list-detail/sidebar/items/web/CategorySidebar';
import Breadcumbs from '@/components/main/collection/breadcumbs/Breadcumbs';
import Sidebar from '@/components/main/blog-detail/sidebar/Sidebar';

interface IPropsMainLayout {
  settingPage?: boolean;
}

export const BlogDetailLayout: React.FC<IPropsMainLayout> = () => {
  return (
    <div className="main">
      <div className="layout">
        <header className="layout__header">
          <Navbar></Navbar>
        </header>
        <section className="layout__content">
          <Breadcumbs title={'Detail'}></Breadcumbs>
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