import '@/styles/globals.css'
import '@/styles/global.scss'

import Layout from '@/styles/container/Layout'
import { styles } from '@/styles/Home.module.css';


export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}
