import Head from 'next/head'
import Footer from '../components/footer'
import Navbar from '../components/navabar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
          <title>HignPixel | Home</title>
      </Head>
    <div >
      
        <h1 className={styles.title}>Home Page</h1>
      
     </div>
     </>
  )
}
