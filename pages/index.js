import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirstPanel from './components/FirstPanel'
import FirstPanelStripes from './components/FirstPanelStripes'
import Front from './components/Front'
import Navigation from './components/Navigation'
import SecondPanel from './components/SecondPanel'
import SecondPanelStripes from './components/SecondPanelStripes'
import ThirdPanel from './components/ThirdPanel'
import ThirdPanelStripes from './components/ThirdPanelStripes'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Front />
      <FirstPanelStripes />
      <FirstPanel />
      <SecondPanelStripes />
      <SecondPanel />
      <ThirdPanelStripes />
      <ThirdPanel />
    </>
 
  )
}
