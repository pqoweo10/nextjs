import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Websites() {
    return (
        <div className={styles.container}>
            <Head>
            <title>Websites | Customer Portal | GearedUp</title>
            <link rel="icon" href="https://static.wixstatic.com/media/6a5579_af1b4ee821284e218d2e24416ca2b250~mv2.jpg/v1/crop/x_0,y_0,w_115,h_128/fill/w_48,h_53,al_c,q_80,usm_0.66_1.00_0.01/GearedUp_Logo_Final.webp" /> 
            </Head>
        </div>
    )
}