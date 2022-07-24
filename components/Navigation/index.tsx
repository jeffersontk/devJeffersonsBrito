import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import { DrawerMenu } from "../DrawerMenu";

export const Navigation = (): ReactElement => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const windowWidth = window.innerWidth
      setIsMobile(windowWidth < 768)
    }
  }, [])

  if (isMobile) {
    return (
      <nav className="sticky top-0 z-50 bg-white-100 h-14 flex items-center w-full">
        <div className="flex-1 flex justify-between px-6">
          <Link href="/">
            <a className="flex gap-1 items-center text-gray-600 font-bold">
              @DevJeffersonBrito
            </a>
          </Link>
          <DrawerMenu />
        </div>
      </nav>
    )
  }
  return (
    <div
      className="sticky top-0 z-50 bg-transparent h-14 flex
        items-center justify-between px-16"
    >
      <Link href="/">
        <a className="flex gap-1 items-center text-white font-bold">
          @DevJeffersonBrito
        </a>
      </Link>
      <ul className="flex items-center gap-5 text-white text-lg font-semibold">
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/Resume">
            <a href="#aboutMe">Sobre</a>
          </Link>
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