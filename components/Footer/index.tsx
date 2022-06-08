import { Download, Envelope, GithubLogo, InstagramLogo, LinkedinLogo, Phone } from "phosphor-react";
import { ReactElement } from "react";

export const Footer = (): ReactElement => {
  return (
    <footer
      id="contact"
      className="w-full bg-primary-dark h-52 flex flex-col justify-center items-center px-32">
      <div className="h-32 flex justify-end items-start gap-5 text-primary-light">
        <div className="flex flex-col gap-3">
          <a href="https://github.com/jeffersontk" className="flex gap-1 items-end" target="_blank">
            <GithubLogo size={24} color="#f5f5f5" weight="fill" />
            Github
          </a>
          <a href="https://www.linkedin.com/in/jeffersonsbrito/" className="flex gap-1 items-end" target="_blank">
            <LinkedinLogo size={24} color="#f5f5f5" weight="fill" />
            Linkedin
          </a>
          <a href="https://www.instagram.com/jeffthebrito/" className="flex gap-1 items-end" target="_blank">
            <InstagramLogo size={24} color="#f5f5f5" weight="fill" />
            Instagram
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="flex gap-1 items-end">
            <Phone size={24} color="#f5f5f5" weight="fill" /> Telefone: (21) 97266-2427
          </span>
          <span className="flex gap-1 items-end">
            <Envelope size={24} color="#f5f5f5" weight="fill" />
            Email: jefferson.britotk@gmail.com
          </span>
          <span className="flex gap-1 items-end">
            <Download size={24} color="#f5f5f5" weight="fill" />
            Download do meu currículo
          </span>
        </div>
      </div>
      <div className="border-t-2 border-secondary-dark w-full flex justify-center mt-5 text-primary-light">
        <h4>Desenvolvido por Jefferson Brito</h4>
      </div>
    </footer>
  )
}