import Sidebar from "./SideBar";
import Footer from "./Footer";
import Header from './Header';
import React, { useState } from 'react'
import SideBar from "./SideBar";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <SideBar/>
      {children}
     
    </div>
  );
}

export default Layout;
