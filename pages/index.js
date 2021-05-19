import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://gearedup.zone">GearedUp!</a>
        </h1>

        <p className={styles.description}>
          We can edit your {' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Service 1 &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Service 2 &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Service 3 &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Service 4 &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
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
