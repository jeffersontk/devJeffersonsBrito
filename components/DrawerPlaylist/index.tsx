import { X } from "phosphor-react"
import { ReactElement, useEffect, useState } from "react"
import { Lesson } from "../Lesson"


type DrawerPlaylist = {
  videos: []
}

export const DrawerPlaylist = ({ videos }: DrawerPlaylist): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="flex items-center justify-center bg-blue-800 py-2 pr-2 rounded-md"
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
        ? "block bg-blue-700 fixed top-0 right-0 z-50 w-full h-screen"
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
          {
            videos && videos.map((video: any, index: number) => {
              return (
                <li onClick={() => setIsOpen(!isOpen)}>
                  <Lesson
                    key={index}
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