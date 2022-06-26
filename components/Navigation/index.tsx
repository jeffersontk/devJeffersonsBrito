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
      <nav className="sticky top-0 z-50 bg-blue-800 h-14 flex items-center w-full">
        <div className="flex-1 flex justify-between px-6">
          <Link href="/">
            <a className="flex gap-1 items-center text-white font-bold">
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
      className="sticky top-0 z-50 bg-blue-800 h-14 flex
        items-center justify-between px-16"
    >
      <div>
        <Link href="/">
          <a className="flex gap-1 items-center text-white font-bold">
            @DevJeffersonBrito
          </a>
        </Link>
      </div>
      <ul className="flex items-center gap-5 text-white text-lg font-semibold">
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