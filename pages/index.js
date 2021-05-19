import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Websites from './websites'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Customer Portal | GearedUp</title>
        <link rel="icon" href="https://static.wixstatic.com/media/6a5579_af1b4ee821284e218d2e24416ca2b250~mv2.jpg/v1/crop/x_0,y_0,w_115,h_128/fill/w_48,h_53,al_c,q_80,usm_0.66_1.00_0.01/GearedUp_Logo_Final.webp"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <a href="https://gearedup.zone">GearedUp</a> customer portal!
        </h1>

        <p className={styles.description}>
          What can we do for you today?
        </p>

        <div className={styles.grid}>
          <button onClick={Websites} className={styles.card}>
            <h3>Websites &rarr;</h3>
            <p>Remove meView all your previous and current websites.</p>
            </button>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Payments &rarr;</h3>
            <p>View your payment history, or make a payment.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Data &rarr;</h3>
            <p>View/Edit all of your data we have.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Create a Ticket &rarr;</h3>
            <p>
              Found a problem with the portal? Let us know.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.gearedup.zone/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="https://static.wixstatic.com/media/6a5579_af1b4ee821284e218d2e24416ca2b250~mv2.jpg/v1/crop/x_0,y_0,w_115,h_128/fill/w_48,h_53,al_c,q_80,usm_0.66_1.00_0.01/GearedUp_Logo_Final.webp" alt="GearedUp Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
