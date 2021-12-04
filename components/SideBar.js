import Styles from "../styles/sideBar.module.scss";
import Image from "next/dist/client/image";
import { render } from "react-dom";
import Link from "next/link";
import React, { useState } from "react";
import SideBarIcon from "./SideBarIcon";

function SideBar() {

  const [isOpen, setIsOpen ] = useState( true )

  const renderSideBar = () => {
    if (!isOpen) {
        return  null
    } 
    return (
      <>
        <div className={Styles.sideBarDivs}>
          <div className={Styles.sideBarLink}>Home</div> 

          <div className={Styles.sideBarLink} id={Styles.dropDown}>
            Shop
          </div>
          {/* these 4 links a visible after shop is clicked */}
          <div className={Styles.shopLinks}>

            <Link href="/ShopLinks/Paintings">
              <div id={Styles.paintingsLink} className={Styles.shopL}>
                <h1>Paintings</h1>
              </div>
            </Link>
            <Link href="/ShopLinks/NFT">
            <div id={Styles.nftLink} className={Styles.shopL}>NFT</div>
            </Link>

            <Link href="/ShopLinks/Sculptures">
            <div id={Styles.sculpturesLink} className={Styles.shopL}>Sculptures</div>
            </Link>

            <Link href="/ShopLinks/Clothing">
            <div id={Styles.clothingLink} className={Styles.shopL}>
              {/* <video autoPlay loop muted  src={require('../public/videos/clothingLink.mp4')} type="videos/mp4" className={Styles.clothingVideo}/> */}
              <h1>Clothing</h1>
            </div>
            </Link>
          </div>

          <div className={Styles.sideBarLink}>Blog</div>
          <div className={Styles.sideBarLink}>Photography</div>
          <div className={Styles.sideBarLink}>Contact</div>
        </div>
      </>
    );
  };



 const toggleSidebar = () => {
      setIsOpen(!isOpen)
  }

  return <div className={Styles.sideBarContainer}>
      <SideBarIcon 
      isOpen={isOpen}
      handleClick={toggleSidebar}
      />
      {renderSideBar()}
  </div>;
}

export default SideBar;
