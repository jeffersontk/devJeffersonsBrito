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
    <div className="bg-blue-900">
      <Head>
        <title>Dev JeffersonBrito</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Navigation />
        <BackgroundSection
          id="aboutMe"
          colorsBox={{
            color1: 'md:bg-blue-800 bg-blue-800',
            color2: 'md:bg-blue-900 bg-blue-900',
          }}
          content={
            (<Hero />)
          }
        />
        <DividerSection
          icon={<Code size={24} color="#f5f5f5" weight="bold" />}
        />
        <BackgroundSection
          id="projects"
          colorsBox={{
            color1: 'md:bg-blue-900 bg-blue-800',
            color2: 'md:bg-blue-800 bg-blue-900',
          }}
          content={(<Projects />)}
        />
        <DividerSection
          icon={<Article size={24} color="#f5f5f5" weight="bold" />}
        />
        <BackgroundSection
          id="posts"
          colorsBox={{
            color1: 'md:bg-blue-800 bg-blue-800',
            color2: 'md:bg-blue-900 bg-blue-900',
          }}
          content={(<Posts />)}
        />
        <Footer />
      </div>
    </div>
  )
}

export default Home
