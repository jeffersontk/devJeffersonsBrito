import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import classNames from 'classnames'

interface LessonProps {
  tag: string;
  title: string;
  description: string;
  slug: string;
  channel: string;
  typeClass: string;
  areaTech: string;
}

export const Lesson = (props: LessonProps): ReactElement => {
  const { title, description, tag, areaTech, channel, typeClass } = props
  const router = useRouter()
  const { slug } = router.query
  const isActivePlay = slug === props.slug

  return (
    <div className="mr-2">
      <Link href={`https://www.youtube.com/c/${channel}`}
      >
        <a target="_blank"
          className="text-gray-300 hover:text-gray-100" >
          @{channel}
        </a>
      </Link>
      <div className="flex justify-center items-center">
        <div className={classNames('', {
          'w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[16px] border-r-blue-700 right-[100%]': isActivePlay,
          'w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[15px] border-r-blue-800 2xl:border-r-blue-900 right-[100%]': !isActivePlay
        })} />
        <Link href={`/playlist/${areaTech}?slug=${props.slug}`}>
          <a>
            <div className={classNames('rounded p-4 mt-2', {
              'bg-blue-700 border border-blue-700': isActivePlay,
              'border border-gray-300 hover:border-gray-100': !isActivePlay
            })}>
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
          </a>
        </Link>

      </div>
    </div>
  )
}