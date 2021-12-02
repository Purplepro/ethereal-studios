import Styles from "../styles/sideBar.module.scss";
import Image from "next/dist/client/image";
import { render } from "react-dom";

function SideBar() {

  



  const renderSideBar = () => {
    return (
      <>
        <div id={Styles.leftArrow}>
          <svg
            width="120"
            height="72"
            viewBox="0 0 100 52"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M70.0761 12.0449C70.6533 11.4506 70.6393 10.501 70.045 9.92386L60.3597 0.519315C59.7653 -0.0577948 58.8157 -0.0438294 58.2386 0.550508C57.6615 1.14484 57.6754 2.09449 58.2698 2.6716L66.8789 11.0312L58.5193 19.6403C57.9422 20.2347 57.9562 21.1843 58.5505 21.7614C59.1448 22.3385 60.0945 22.3246 60.6716 21.7302L70.0761 12.0449ZM1.02206 13.4998L69.0221 12.4998L68.9779 9.50016L0.977944 10.5002L1.02206 13.4998Z" />
          </svg>{" "}
        </div>
        <div className={Styles.sideBarDivs}>
          <div className={Styles.sideBarLink}>Home</div>
          <div className={Styles.sideBarLink} id={Styles.dropDown}>
            Shop
          </div>
          {/* these 4 links a visible after shop is clicked */}
          <div className={Styles.shopLinks}>
            <div id={Styles.paintingsLink}>
              <h1>Paintings</h1>
            </div>
            <div id={Styles.nftLink}>NFT</div>
            <div id={Styles.sculpturesLink}>Sculptures</div>
            <div id={Styles.clothingLink}>
              {/* <video autoPlay loop muted  src={require('../public/videos/clothingLink.mp4')} type="videos/mp4" className={Styles.clothingVideo}/> */}
              <h1>Clothing</h1>
            </div>
          </div>

          <div className={Styles.sideBarLink}>Blog</div>
          <div className={Styles.sideBarLink}>Photography</div>
          <div className={Styles.sideBarLink}>Contact</div>
        </div>
      </>
    );
  };

  return <div className={Styles.sideBarContainer}>{renderSideBar()}</div>;
}

export default SideBar;
