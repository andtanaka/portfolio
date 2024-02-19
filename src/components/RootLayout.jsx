import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideButton from './SideButton';
import Footer from './Footer';

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <SideButton />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
