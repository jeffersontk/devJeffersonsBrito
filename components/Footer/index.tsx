import Image from "next/image";
import Link from "next/link";
import { Download, Envelope, GithubLogo, InstagramLogo, LinkedinLogo, Phone } from "phosphor-react";
import { ReactElement } from "react";
import style from './style.module.scss'

export const Footer = (): ReactElement => {
  return (
    <footer
      id="contact"
      className="w-full bg-brand-100 h-[200px] flex flex-col justify-center gap-4  md:px-16 px-6">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">Contato</h3>
        <div className="flex gap-1 items-center">
          <Phone size={24} color="#f5f5f5" weight="fill" />
          +55 (21) 97266-2427
        </div>
        <div className="flex gap-1 items-center">
          <Envelope size={24} color="#f5f5f5" weight="fill" />
          jefferson.britotk@gmail.com
        </div>
        <div className="flex gap-1 items-center">
          <Download size={24} color="#f5f5f5" weight="fill" />
          Download my CV
        </div>
      </div>
      <div className="border-t-[1px] border-white-100 w-full h-8 pt-2 flex justify-center items-center text-white ">
        <h6 className="h-[25px]">Desenvolvido por Jefferson Brito</h6>
      </div>
    </footer >
  )
}