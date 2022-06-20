import Link from "next/link";
import { ReactElement } from "react";

export const Navigation = (): ReactElement => {
  return (
    <div
      className="sticky top-0 z-50 bg-blue-200 h-14 flex
        items-center justify-between px-16"
    >
      <div>
        <Link href="/">
          <a className="flex gap-1 items-center text-primary-light font-bold">
            @DevJeffersonBrito
          </a>
        </Link>
      </div>
      <ul className="flex items-center gap-5 text-white text-lg">
        <li>
          <a href="#aboutMe">Sobre</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#posts">Posts</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </div>
  )
}