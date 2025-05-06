import React from 'react'
import TopNavbar from './CommonComponents/TopNavbar';
import { Outlet } from 'react-router-dom';
import Footer from './CommonComponents/Footer';

const Layout = () => {
  return (
      <>
          <TopNavbar />
          <Outlet />
          <Footer />
      </>
  )
}

export default Layout;