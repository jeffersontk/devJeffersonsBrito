import Link from "next/link";
import { ReactElement } from "react";
import { Footer } from "../../components/Footer";
import { Navigation } from "../../components/Navigation";

const Resume = (): ReactElement => {
  return (
    <div>
      <Navigation />
      <div className="w-full flex justify-center">
        <div className="max-w-screen-2xl w-full flex justify-center px-5 pt-5">
          <div className="bg-blue-700 max-w-screen-lg min-h-[85vh] flex-1 flex justify-center rounded-md p-4">
            <p className="md:text-lg text-base text-white">
              Olá aqui é o jefferson Brito, seja bem-vindo! <br />
              Aqui você pode ver alguns dos meus projetos, posts e os meus canais de contato e
              uma breve descrição sobre mim e meu trabalho.
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
              Atuando como desenvolvedor front-end na Firjan SENAI no ISI (Instituto SENAI de Inovação).
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Resume