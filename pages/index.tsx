import type { NextPage } from 'next'
import { BackgroundSection } from '../components/BackgroundSection'
import { Navigation } from '../components/Navigation'
import { DividerSection } from '../components/DividerSection'
import { Footer } from '../components/Footer'
import { Article, Code } from 'phosphor-react'
import Head from 'next/head'
import { Hero } from '../components/Organism/Hero';
import { Projects } from '../components/Organism/Projects'
import { Posts } from '../components/Organism/Posts'

const Home: NextPage = () => {
  return (
    <div className="bg-slate-900">
      <Head>
        <title>Dev JeffersonBrito</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Navigation />
        <BackgroundSection
          id="aboutMe"
          colorsBox={{
            color1: 'md:bg-blue-100 bg-blue-100',
            color2: 'md:bg-blue-200 bg-blue-200',
          }}
          children={<Hero />}
        />
        <DividerSection
          icon={<Code size={24} color="#222b45" weight="bold" />}
        />
        <BackgroundSection
          id="projects"
          colorsBox={{
            color1: 'md:bg-blue-200 bg-blue-100',
            color2: 'md:bg-blue-100 bg-blue-200',
          }}
          children={<Projects />}
        />
        <DividerSection
          icon={<Article size={24} color="#222b45" weight="bold" />}
        />
        <BackgroundSection
          id="posts"
          colorsBox={{
            color1: 'bg-blue-100',
            color2: 'bg-blue-200',
          }}
          children={<Posts />}
          hiddenBox={true}
        />
        <Footer />
      </div>
    </div>
  )
}

export default Home
