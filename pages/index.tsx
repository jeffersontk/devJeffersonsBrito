import type { NextPage } from 'next'
import Image from 'next/image'
import { BackgroundSection } from '../components/BackgroundSection'
import { Navigation } from '../components/Navigation'
import Jeffbrito from '../assets/jefferson-brito.png'
import { DividerSection } from '../components/DividerSection'
import { Footer } from '../components/Footer'
import { Article, Code } from 'phosphor-react'
import { Carousel } from '../components/Carousel'
import Head from 'next/head'

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
            color: 'bg-blue-100',
            content: (
              <div className='p-14 flex flex-col gap-10 justify-center items-center'>
                <p className="text-xl text-primary-light">
                  Olá aqui é o jefferson Brito, seja bem-vindo! <br />
                  Aqui você pode ver alguns dos meus projetos, posts e os meus canais de contato e
                  uma breve descrição sobre mim e meu trabalho.
                  <br /> <br />
                  Formado em Analise e Desenvolvimento de Sistemas pelo
                  <a href='https://www.unicarioca.edu.br/' target="_blank"> Centro Universitário Carioca ou UniCarioca </a>
                  e atualmente cursando pós-graduação em Experiência do Usuário no <a href="https://loja.ibmronline.com.br/">
                    centro universitário IBMR
                  </a> com o objetivo de desenvolver sistemas com uma boa usabilidade e experiência para o usuário.
                  <br /> <br />
                  Atuando como desenvolvedor front-end na Firjan SENAI no ISI (Instituto de Tecnologia e Inovação).
                </p>
              </div>
            ),
          }}
          box2={{
            color: 'bg-blue-200',
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
            color: 'bg-blue-200',
            content: (
              <h1 className="text-3xl text-center text-white"></h1>
            ),
          }}
          box2={{
            color: 'bg-blue-100',
            content: (
              <Carousel
                styleCard='Default'
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
            ),
          }}
        />
        <DividerSection
          icon={<Article size={24} color="#222b45" weight="bold" />}
        />
        <BackgroundSection
          id="posts"
          box1={{
            color: 'bg-blue-100',
            content: (
              <h1 className="text-3xl text-center text-white"></h1>
            ),
          }}
          box2={{
            color: 'bg-blue-200',
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
