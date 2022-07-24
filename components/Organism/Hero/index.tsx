import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import Jeffbrito from '../../../assets/jefferson-brito.png'
import JeffbritoMobile from '../../../assets/jefferson-brito-img-mobile.png'

export const HeroDeskTop = (): ReactElement => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-16 items-center justify-center">
      <div className='flex flex-col gap-10 h-[30rem] md:h-110 items-end md:items-start justify-center'>
        <p className="md:text-xl text-base text-white">
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
          <Link href="/Resume">
            <a className='bg-white text-center text-lg w-40 px-4 py-2 font-semibold text-blue-700 rounded-3xl'>Ler mais</a>
          </Link>
        </div>
      </div>
      <div className='flex items-end h-[30rem] md:h-110 justify-center'>
        <Image src={Jeffbrito} height="450px" width="287px" alt="Jefferson Brito" />
      </div>
    </div>
  )
}

export const HeroMobile = (): ReactElement => {
  return (
    <div className="flex h-[300px] px-6">
      <div className="flex flex-col justify-between h-[270px]">
        <p className="text-gray-500 font-semibold line-height">
          Hello here is <br />
          <strong className="text-2xl">Jefferson Brito</strong> <br />
          I am a software developer <br />  specialized in <br /> <br />
          <strong className="text-2xl bg-brand-100 rounded-md text-white-100 p-2">Front-end</strong>
        </p>
        <Link href="/Resume">
          <a className="w-28 flex justify-center text-base font-semibold bg-brand-100 rounded-md text-white-100 p-2">About more</a>
        </Link>
      </div>
      <div className="w-[200px] absolute right-5">
        <Image src={JeffbritoMobile} min-width="218px" min-height="291px" alt="Jefferson Brito" />
      </div>
    </div>
  )
}