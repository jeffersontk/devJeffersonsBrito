import type { NextPage } from 'next'
import { BackgroundSection } from '../components/BackgroundSection'
import { Navigation } from '../components/Navigation'
import { DividerSection } from '../components/DividerSection'
import { Footer } from '../components/Footer'
import { Article, Code } from 'phosphor-react'
import Head from 'next/head'
import { HeroDeskTop, HeroMobile } from '../components/Organism/Hero';
import { Projects } from '../components/Organism/Projects'
import { Posts } from '../components/Organism/Posts'
import { MySkills } from '../components/MySkills'
import { RecommendedPlaylist } from '../components/Organism/Playlists'

const Home: NextPage = () => {
  return (
    <div className="bg-white-200">
      <Head>
        <title>Dev JeffersonBrito</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Navigation />
        <HeroMobile />
        <div className="p-6 bg-brand-100">
          <Projects />
        </div>
        <div className="p-6">
          <MySkills />
        </div>
        <div className="p-6  bg-brand-100">
          <Posts />
        </div>
        <div className="p-6">
          <RecommendedPlaylist />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
