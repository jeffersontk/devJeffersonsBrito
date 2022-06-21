import { ReactElement } from "react";
import { BallStacks } from "../../BallStacks";
import { Carousel, Container } from "../../Carousel";
import JavascriptIMG from "../../../assets/javascript.jpg";
import TypescriptIMG from "../../../assets/typescript.png";
import HTMLIMG from "../../../assets/html.jpg";
import CSSIMG from "../../../assets/css.jpg";
import NodeIMG from "../../../assets/nodeJS.png";
import SassIMG from "../../../assets/sass.png";
import ReactIMG from "../../../assets/reactJSLogo.png";
import Figma from "../../../assets/figmaLogo.png";
import VueJSIMG from "../../../assets/vueJSLogo.png";

export const Projects = (): ReactElement => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-center">
      <div className="flex items-center justify-center w-full">
        <Container>
          <div className="flex items-end h-24 mb-6">
            <h1 className="text-primary-light font-medium text-3xl">Minhas Habilidades</h1>
          </div>
          <div className='max-w-xl xl:max-w-3xl h-80 flex flex-row-reverse flex-wrap justify-end items-center overflow-hidden gap-2'>
            <BallStacks
              skill={JavascriptIMG}
              alt="Javascript"
            />
            <BallStacks
              skill={TypescriptIMG}
              alt="Typescript"
            />
            <BallStacks
              skill={HTMLIMG}
              alt="HTML5"
            />
            <BallStacks
              skill={CSSIMG}
              alt="CSS3"
            />
            <BallStacks
              skill={ReactIMG}
              alt="React JS"
            />
            <BallStacks
              skill={VueJSIMG}
              alt="Vue JS"
            />
            <BallStacks
              skill={NodeIMG}
              alt="Node JS"
            />
            <BallStacks
              skill={SassIMG}
              alt="Pre processador css - Sass"
            />
            <BallStacks
              skill={Figma}
              alt="Ferramenta de designer - Figma"
            />
          </div>
        </Container>
      </div>
      <Carousel
        title="Projetos"
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
    </div>
  )
}