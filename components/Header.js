import { route } from "next/dist/server/router";
import styles from "../styles/LandingPage.module.scss";
import { useState } from "react";
import SideBarIcon from "./SideBarIcon";
import SideBar from "./SideBar";

function Header(props) {
  return (
    <div className={styles.headerContainer}>
      <div id={styles.dummyDiv}></div>
      <div id={styles.logoDiv} className={styles.sibling}>
        <h1>
          Ethereal Studio<span id={styles.s}>s</span>
          <span id={styles.bodega}>Bodega</span>
          <h1></h1>
        </h1>

      </div>

      <SideBarIcon />
    </div>
  );
}

export default Header;
