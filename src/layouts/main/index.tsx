import React, { Suspense } from 'react';

import Footer from '@/components/main/landing-page/footer/Footer';
import Navbar from '@/components/main/landing-page/navbar/Navbar';
import '@/styles/layouts/_main.scss';
import '@/index.scss';
import { Outlet } from 'react-router-dom';
import CategorySidebar from '@/components/main/product-list-detail/sidebar/items/web/CategorySidebar';

interface IPropsMainLayout {
  settingPage?: boolean;
}

export const MainLayout: React.FC<IPropsMainLayout> = () => {
  return (
    <div className="main">
      <div className="layout">
        <header className="layout__header">
          <Navbar></Navbar>
        </header>
        <section className="layout__context">
          <Suspense fallback={<></>}>
            <Outlet></Outlet>
          </Suspense>
        </section>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};
