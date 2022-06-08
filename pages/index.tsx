import type { NextPage } from 'next'
import Image from 'next/image'
import { BackgroundSection } from '../components/BackgroundSection'
import { Navigation } from '../components/Navigation'
import Jeffbrito from '../assets/jefferson-brito.png'
import { DividerSection } from '../components/DividerSection'
import { Footer } from '../components/Footer'
import { Article, Code } from 'phosphor-react'
import { Cards } from '../components/cards'

const Home: NextPage = () => {
  return (
    <div className="bg-slate-900">
      <Navigation />
      <BackgroundSection
        id="aboutMe"
        box1={{
          color: 'bg-secondary-dark',
          content: (
            <div className='p-14 flex flex-col gap-10 justify-center items-center'>
              <h1 className="text-3xl text-center text-white">Jefferson Brito</h1>
              <p className="text-xl text-primary-light">Desenvolvedor de software especializado em Front-end</p>
            </div>
          ),
        }}
        box2={{
          color: 'bg-primary-dark',
          content: (
            <div className='flex items-end h-110 justify-center'>
              <Image src={Jeffbrito} height="450px" width="287px" />
            </div>
          ),
        }}
      />
      <DividerSection
        icon={<Code size={24} color="#222b45" weight="bold" />}
      />
      <BackgroundSection
        id="projects"
        box1={{
          color: 'bg-primary-dark',
          content: (
            <h1 className="text-3xl text-center text-white"></h1>
          ),
        }}
        box2={{
          color: 'bg-secondary-dark',
          content: (
            <div className='flex flex-col h-110 justify-center pl-14'>
              <h2 className='text-primary-light font-medium text-3xl'>Projetos</h2>
              <div className='flex gap-5 md:overflow-x-scroll rounded-md py-4'>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
              </div>
            </div>
          ),
        }}
      />
      <DividerSection
        icon={<Article size={24} color="#222b45" weight="bold" />}
      />
      <BackgroundSection
        id="posts"
        box1={{
          color: 'bg-secondary-dark',
          content: (
            <h1 className="text-3xl text-center text-white"></h1>
          ),
        }}
        box2={{
          color: 'bg-primary-dark',
          content: (
            <div className='flex items-end h-110 justify-center'>
            </div>
          ),
        }}
      />
      <Footer />
    </div>
  )
}

export default Home
