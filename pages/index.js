import Head from 'next/head'
import Landing from '../Components/Landing'

export default function Home() {
  return (
    <>
      <Head>
        <title>AQ Khajoor Shop</title>
        <meta name="description" content="AQ Khajoor Shop" />
      </Head>
      
      <Landing />
    </>
  )
}
