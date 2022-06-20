import type { NextPage } from 'next'
import Image from 'next/image'
import { BackgroundSection } from '../components/BackgroundSection'
import { Navigation } from '../components/Navigation'
import Jeffbrito from '../assets/jefferson-brito.png'
import JavascriptIMG from "../assets/javascript.jpg";
import TypescriptIMG from "../assets/typescript.png";
import HTMLIMG from "../assets/html.jpg";
import CSSIMG from "../assets/css.jpg";
import NodeIMG from "../assets/nodeJS.png";
import SassIMG from "../assets/sass.png";
import ReactIMG from "../assets/reactJSLogo.png";
import Figma from "../assets/figmaLogo.png";
import VueJSIMG from "../assets/vueJSLogo.png";

import { DividerSection } from '../components/DividerSection'
import { Footer } from '../components/Footer'
import { Article, Code } from 'phosphor-react'
import { Carousel, Container } from '../components/Carousel'
import Head from 'next/head'
import Link from 'next/link'
import { BallStacks, random } from '../components/BallStacks'

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
              <div className='px-14 pt-10 flex flex-col gap-10 justify-center items-center'>
                <p className="text-xl text-primary-light">
                  Olá aqui é o jefferson Brito, seja bem-vindo! <br />
                  Aqui você pode ver alguns dos meus projetos, posts e os meus canais de contato e
                  uma breve descrição sobre mim e meu trabalho.
                  <br /> <br />
                  Formado em Analise e Desenvolvimento de Sistemas pelo
                  <Link href='https://www.unicarioca.edu.br/' passHref>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: 'underline'
                      }}> Centro Universitário Carioca </a>
                  </Link>
                  e atualmente cursando pós-graduação em Experiência do Usuário no <Link href="https://loja.ibmronline.com.br/" passHref>
                    <a target="_blank" rel="noopener noreferrer" style={{
                      textDecoration: 'underline'
                    }}>Centro universitário IBMR</a>
                  </Link> com o objetivo de desenvolver sistemas com uma boa usabilidade e experiência para o usuário.
                  <br /> <br />
                  Atuando como desenvolvedor front-end na Firjan SENAI no ISI (Instituto SENAI de Inovação).
                </p>
                <div className="flex w-full">
                  <button className='bg-primary-light w-40 px-4 py-2 font-semibold text-blue-200 rounded-3xl'>Ler mais</button>
                </div>
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
              <Container>
                <div className="flex items-end h-24 mb-6">
                  <h1 className="text-primary-light font-medium text-3xl">Minhas Habilidades</h1>
                </div>
                <div className='max-w-xl xl:max-w-3xl h-80 flex flex-row flex-wrap  justify-end items-center overflow-hidden gap-2'>
                  <BallStacks
                    x={50}
                    y={150}
                    skill={JavascriptIMG}
                    alt="Javascript"
                  />
                  <BallStacks
                    x={150}
                    y={2}
                    skill={TypescriptIMG}
                    alt="Typescript"
                  />
                  <BallStacks
                    x={-150}
                    y={150}
                    skill={HTMLIMG}
                    alt="HTML5"
                  />
                  <BallStacks
                    x={-50}
                    y={150}
                    skill={CSSIMG}
                    alt="CSS3"
                  />
                  <BallStacks
                    x={5}
                    y={150}
                    skill={ReactIMG}
                    alt="React JS"
                  />
                  <BallStacks
                    x={-100}
                    y={50}
                    skill={VueJSIMG}
                    alt="Vue JS"
                  />
                  <BallStacks
                    x={-50}
                    y={150}
                    skill={NodeIMG}
                    alt="Node JS"
                  />
                  <BallStacks
                    x={50}
                    y={-150}
                    skill={SassIMG}
                    alt="Pre processador css - Sass"
                  />
                  <BallStacks
                    x={-150}
                    y={50}
                    skill={Figma}
                    alt="Ferramenta de designer - Figma"
                  />
                </div>
              </Container>
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
          box3={{
            color: 'bg-blue-200',
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
            )
          }}
        />
        <Footer />
      </main>
    </div>
  )
}

export default Home
