import { BallStacks } from "../BallStacks"
import { Container } from "../Carousel"
import JavascriptIMG from "../../assets/javascript.jpg";
import TypescriptIMG from "../../assets/typescript.png";
import HTMLIMG from "../../assets/html.jpg";
import CSSIMG from "../../assets/css.jpg";
import NodeIMG from "../../assets/nodeJS.png";
import SassIMG from "../../assets/sass.png";
import ReactIMG from "../../assets/reactJSLogo.png";
import Figma from "../../assets/figmaLogo.png";
import VueJSIMG from "../../assets/vueJSLogo.png";

export const MySkills = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <Container>
        <div className="flex h-[36px] mb-[6px]">
          <h1 className="text-gray-500 font-medium text-3xl">Minhas Habilidades</h1>
        </div>
        <div className='max-w-xl xl:max-w-3xl h-[382px] flex flex-row-reverse flex-wrap justify-end items-center overflow-hidden gap-2'>
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
  )
}