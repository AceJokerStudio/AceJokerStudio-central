import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Home from './../styles/container/Home';

const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <>
      <Head>
        <title>AceJoker Studio | Home</title>
        <meta name="description" content="The homepage of ace joker studio a subsidiary of acejokercapital.com. This site contains all applications created by Ace Joker Studio a subsidiary of AceJoker Capital Inc." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/AJS.png" />
      </Head>

      <Home />

    </>
  )
}
