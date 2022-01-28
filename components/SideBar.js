import Styles from "../styles/sideBar.module.scss";
import Image from "next/dist/client/image";
import { render } from "react-dom";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import SideBarIcon from "./SideBarIcon";
import SideBarContent from "./SideBarContent";
import gsap, { Elastic } from "gsap";
import { Transition } from 'react-transition-group';




function SideBar(props) {
 


  return (
    

      <div className={Styles.sideBarContainer}>
        {/* <SideBarIcon isOpen={isOpen} handleClick={toggleSidebar} /> */}
        <SideBarContent  />
      </div>


  );
}

export default SideBar;
