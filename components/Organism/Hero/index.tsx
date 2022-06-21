import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import Jeffbrito from '../../../assets/jefferson-brito.png'

export const Hero = (): ReactElement => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-16 items-center justify-center">
      <div className='flex flex-col gap-10 h-[30rem] md:h-110 items-end md:items-start justify-center'>
        <p className="md:text-xl text-base text-primary-light">
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
      <div className='flex items-end h-[30rem] md:h-110 justify-center'>
        <Image src={Jeffbrito} height="450px" width="287px" alt="Jefferson Brito" />
      </div>
    </div>
  )
}