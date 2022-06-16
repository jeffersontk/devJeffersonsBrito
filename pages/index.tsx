import type { NextPage } from 'next'
import Image from 'next/image'
import { BackgroundSection } from '../components/BackgroundSection'
import { Navigation } from '../components/Navigation'
import Jeffbrito from '../assets/jefferson-brito.png'
import JavascriptIMG from "../assets/javascript.jpg";
import TypescriptIMG from "../assets/typescript.png";
import HTMLIMG from "../assets/html.jpg";
import CSSIMG from "../assets/css.jpg";
import ReactIMG from "../assets/reactJS.png";
import NodeIMG from "../assets/nodeJS.png";
import SassIMG from "../assets/sass.png";
import Figma from "../assets/figma.png";

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
              <div className='p-14 flex flex-col gap-10 justify-center items-center'>
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
                  Atuando como desenvolvedor front-end na Firjan SENAI no ISTI (Instituto SENAI de Tecnologia e Inovação).
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
              <Container>
                <div className="flex items-end h-40 pr-14">
                  <h1 className="text-primary-light font-medium text-3xl">Minhas Habilidades</h1>
                </div>
                <div className='max-w-lg h-full flex justify-center items-center overflow-hidden'>
                  <BallStacks
                    x={random(50, 150)}
                    y={random(150, 0)}
                    skill={JavascriptIMG}
                  />
                  <BallStacks
                    x={random(50, 150)}
                    y={random(150, 0)}
                    skill={TypescriptIMG}
                  />
                  <BallStacks
                    x={random(150, -150)}
                    y={random(-150, 150)}
                    skill={HTMLIMG}
                  />
                  <BallStacks
                    x={random(150, -150)}
                    y={random(-150, 150)}
                    skill={CSSIMG}
                  />
                  <BallStacks
                    x={random(150, -150)}
                    y={random(-150, 150)}
                    skill={ReactIMG}
                  />
                  <BallStacks
                    x={random(0, -150)}
                    y={random(0, 150)}
                    skill={NodeIMG}
                  />
                  <BallStacks
                    x={random(50, -150)}
                    y={random(50, -150)}
                    skill={SassIMG}
                  />
                  <BallStacks
                    x={random(50, -150)}
                    y={random(50, -150)}
                    skill={Figma}
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
