import React from 'react'
import TopNavbar from './CommonComponents/TopNavbar';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
      <>
          <TopNavbar />
          <Outlet />
          
      </>
  )
}

export default Layout;