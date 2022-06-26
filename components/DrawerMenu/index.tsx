import { X } from "phosphor-react"
import { ReactElement, useState } from "react"

export const DrawerMenu = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="flex items-center justify-center bg-blue-800 py-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg>
      </button>
      <div className={`${isOpen
        ? "block bg-blue-700 fixed top-0 right-0 z-50 w-52 h-screen"
        : "hidden"}`}>
        <ul className="flex flex-col gap-4 px-6 py-4">
          <li>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-end justify-end rounded-full"
            >
              <X size={32} color="#f5f5f5" weight="fill" />
            </button>
          </li>
          <li>
            <a
              href="#aboutMe"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white font-semibold text-2xl"
            >Sobre</a>
          </li>
          <li>
            <a href="#projects"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white font-semibold text-2xl"
            >Projetos</a>
          </li>
          <li>
            <a href="#posts"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white font-semibold text-2xl"
            >Posts</a>
          </li>
          <li>
            <a href="#contact"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white font-semibold text-2xl"
            >Contato</a>
          </li>
        </ul>
      </div>
    </div>
  )
}