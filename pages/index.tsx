import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'




export default function Home() {
  return (
    <>
    <Head>
      <title>Home | Page </title>
    </Head>
    <div>
      <h1 className={styles.title}> About the website </h1>
      <p className={styles.text}> Welcome to our website, where you can view routing information and retrieve data from an API. </p>
      <p className={styles.text}>Provide a brief overview of routing and how it works in the context of your website. This could include information on the different routes available, how to access them, and any important details about the routing process</p>
      <Link href="/new" passHref={true} legacyBehavior>
        <a className={styles.btn}>See Test Data </a>
      </Link>
    </div>
    </>
  )
}