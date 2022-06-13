import type { NextPage } from 'next'
import Image from 'next/image'
import { BackgroundSection } from '../components/BackgroundSection'
import { Navigation } from '../components/Navigation'
import Jeffbrito from '../assets/jefferson-brito.png'
import { DividerSection } from '../components/DividerSection'
import { Footer } from '../components/Footer'
import { Article, Code } from 'phosphor-react'
import { Cards } from '../components/cards'
import { Carousel } from '../components/Carousel'
import Head from 'next/head'
import Script from 'next/script'

const Home: NextPage = () => {
  return (
    <div className="bg-slate-900">
      <Head>
        <title>Dev JeffersonBrito</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
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
                <Carousel
                  slides={[
                    {
                      imageBackground: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                      title: 'Projeto 1',
                      description: 'Descrição do projeto 1',
                      link: 'https://www.google.com',
                    },
                    {
                      imageBackground: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                      title: 'Projeto 2',
                      description: 'Descrição do projeto 3 asdasd asdasdhoiasjd akjsdlaksjdlaksjdç laksjdçlaksjd çlaskjdçalskdaçlskdaçslkdjaçsldkja hasuhdajsdash',
                      link: 'https://www.google.com',
                    },
                    {
                      imageBackground: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                      title: 'Projeto 3',
                      description: 'Descrição do projeto 3',
                      link: 'https://www.google.com',
                    }
                  ]}
                />
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
      </main>
    </div>
  )
}

export default Home
