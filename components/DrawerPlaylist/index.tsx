import Link from "next/link"
import { ArrowLeft, X } from "phosphor-react"
import { ReactElement, useEffect, useState } from "react"
import { Lesson } from "../Lesson"


type DrawerPlaylist = {
  videos: [],
  areaTech: string
}

export const DrawerPlaylist = ({ videos, areaTech }: DrawerPlaylist): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <button
          className="flex items-center justify-center bg-blue-800 rounded-md"
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
      </div>
      <div className={`${isOpen
        ? "block bg-blue-800 fixed top-0 right-0 z-[100] w-full h-screen"
        : "hidden"}`}>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center justify-between border-b border-gray-300 p-5">
            <Link href="/#posts">
              <a>
                <ArrowLeft size={24} color="#f5f5f5" />
              </a>
            </Link>
            <div className="flex">
              <h1 className="text-2xl font-bold">
                Jeff Lab
              </h1>
              <span className="mx-1 text-xl text-blue-100 font-black">|</span>
              <span className="text-2xl font-thin uppercase">{areaTech}</span>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-[-8px]"
            >
              <X size={32} color="#f5f5f5" weight="fill" />
            </button>
          </li>
          {
            videos && videos.map((video: any, index: number) => {
              return (
                <li key={index} onClick={() => setIsOpen(!isOpen)} className="px-4 flex justify-center">
                  <Lesson
                    channel={video.channel}
                    tag={video.tech}
                    title={video.title}
                    description={video.description}
                    slug={video.slug}
                    typeClass={video.typeClass}
                    areaTech={video.areatech}
                  />
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}