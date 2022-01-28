import Sidebar from "./SideBar";
import Footer from "./Footer";
import Header from "./Header";
import React, { useState } from "react";
import SideBar from "./SideBar";
import Styles from '../styles/global.module.scss';

function Layout({ children }) {
  return (
    <div className={Styles.layout}>
      <SideBar />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
