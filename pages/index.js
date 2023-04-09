import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {BookingForm, Doctors, Services } from '../components'
import CoreValuesSection from '../components/CoreValuesSectio'
import LandingBanner from '../components/LandingBanner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Welcome to our healthcare home page, where we offer a wide range of medical services and treatments for all of your health needs. Our experienced healthcare professionals are dedicated to providing high-quality care in a safe and comfortable environment." />
        <meta name="keywords" content="healthcare,Healthpal, medical services, treatments, healthcare professionals" />
        <meta name="author" content="Healthpal" />
        <link rel="canonical" href="https://www.healthpal.com" />
      </Head>
      <main className={styles.home}>
        <LandingBanner />
        <Services />
        <Doctors />
        <BookingForm />
        <br />
        <br />
        <br />
        <CoreValuesSection />
       
      </main>
    </>
  )
}
