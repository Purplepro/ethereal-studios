import React from 'react'
import Link from "next/link";
import Styles from "../styles/sideBar.module.scss";
import gsap from 'gsap';

function SideBarContent(props) {


    const renderLinks = () => {
        if (!props.isOpen) {
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
    
    return (
        <>
            {renderLinks()}
        </>
    )
}

export default SideBarContent

