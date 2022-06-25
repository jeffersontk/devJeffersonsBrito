import Link from "next/link";
import { ReactElement } from "react";

interface LessonProps {
  tag: string;
  title: string;
  description: string;
  slug: string;
  channel: string;
  typeClass: 'theory' | 'practice';
}

export const Lesson = (props: LessonProps): ReactElement => {
  const { title, description, tag, slug, channel, typeClass } = props
  return (
    <div className="mr-2">
      <Link href={`https://www.youtube.com/c/${channel}`}
      >
        <a target="_blank"
          className="text-gray-300 hover:text-gray-100" >
          @{channel}
        </a>
      </Link>
      <div className="rounded border border-gray-300 p-4 mt-2 hover:border-gray-100">
        <header className="flex item-center justify-between mb-2">
          <strong className="text-md text-white font-medium ">
            {tag}
          </strong>
          <span className="text-sm rounded py-[0.125rem] px-2 text-white border border-gray-300 font-bold">
            {typeClass === 'theory' ? 'AULA TEÓRICA' : 'AULA PRATICA'}
          </span>
        </header>
        <div className="flex flex-col gap-2 max-w-[280px]">
          <span className="text-gray-200 text-ellipsis whitespace-nowrap overflow-hidden">
            {title}
          </span>
          <span className="text-sm text-gray-200 text-ellipsis whitespace-nowrap overflow-hidden">
            {description}
          </span>
        </div>
      </div>
    </div>
  )
}