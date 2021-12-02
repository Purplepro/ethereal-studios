import { route } from 'next/dist/server/router';
import styles from '../styles/LandingPage.module.scss';
import {useState} from 'react'

function Header() {
    const [headerColor, setHeaderColor] = useState('');

    const colorAdaption = () => {

    if(route === '/LandingPage') {
        <h1 style={color="FFFDEB"}> Ethereal Studios </h1>
        }
    }

    return (
        <div className={styles.headerContainer}>
           <div id={styles.logoDiv} className={styles.sibling}> 
               <h1>Ethereal Studio<span id={styles.s}>s</span><span id={styles.bodega}>Bodega</span></h1>
            </div>

            <div id={styles.arrowSvg} className={styles.sibling}><svg width="120" height="72" viewBox="0 0 100 52" xmlns="http://www.w3.org/2000/svg">
            <path d="M70.0761 12.0449C70.6533 11.4506 70.6393 10.501 70.045 9.92386L60.3597 0.519315C59.7653 -0.0577948 58.8157 -0.0438294 58.2386 0.550508C57.6615 1.14484 57.6754 2.09449 58.2698 2.6716L66.8789 11.0312L58.5193 19.6403C57.9422 20.2347 57.9562 21.1843 58.5505 21.7614C59.1448 22.3385 60.0945 22.3246 60.6716 21.7302L70.0761 12.0449ZM1.02206 13.4998L69.0221 12.4998L68.9779 9.50016L0.977944 10.5002L1.02206 13.4998Z"/>
            </svg> </div>


           
        </div>
    )
}

export default Header
