import React from 'react';
import styles from '../styles/LandingPage.module.scss';



function LandingPage() {
    return (
        <div className={styles.landingPageContainer}>

            <div className={styles.topSection}>
            <video autoPlay loop muted src={require('../public/videos/liquidArt.mp4')} type="videos/mp4" className={styles.landingPageVideo}/>
            </div>

            <div className={styles.middleSection}></div>
            <div></div>
        </div>
    )
}

export default LandingPage
