import { ReactElement } from "react";
import { Lesson } from "../Lesson";


interface SideBarProps {
  videos: []
}

export const SideBar = ({ videos }: SideBarProps): ReactElement => {

  return (
    <aside className=" border-l border-gray-300 p-4 2xl:bg-blue-900 bg-blue-800 ">
      <span className="font-bold text-2xl pb-4 mb-4 border-b border-gray-300 block">
        PlayList
      </span>

      <div className="max-h-[90vh] flex flex-col gap-8 overflow-y-auto   ">
        {videos.map((item: any) => {
          console.log('check', item)
          return (
            <Lesson
              key={item.id}
              channel={item.channel}
              tag={item.tech}
              title={item.title}
              description={item.description}
              slug={item.slug}
              typeClass={item.typeClass}
            />
          )
        })}
      </div>
    </aside>
  )
}