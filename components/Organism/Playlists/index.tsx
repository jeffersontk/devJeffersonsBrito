import Link from "next/link"
import { Container } from "../../Carousel"

export const RecommendedPlaylist = () => {
  return (
    <div className="flex w-full">
      <Container>
        <div className="flex h-[42px] mb-2">
          <h1 className="text-gray-500 font-medium text-2xl">Playlist Recomendadas</h1>
        </div>
        <div className="grid xl:grid-cols-3 grid-cols-2 grid-flow-row gap-6">
          <Link href={`/playlist/iniciante`}>
            <a className="w-full xl:h-[176px] h-28 flex justify-center items-center 
              bg-brand-200 rounded-md text-2xl">
              Iniciante
            </a>
          </Link>
          <Link href={`/playlist/frontend`}>
            <a className="w-full xl:h-[176px] h-28 flex justify-center items-center 
              bg-brand-200 rounded-md text-2xl">
              Front-end
            </a>
          </Link>
          <Link href={`/playlist/backend`}>
            <a className="w-full xl:h-[176px] h-28 flex justify-center items-center 
              bg-brand-200 rounded-md text-2xl">
              Back-end
            </a>
          </Link>
          <Link href={`/playlist/uiux`}>
            <a className="w-full xl:h-[176px] h-28 flex justify-center items-center 
              bg-brand-200 rounded-md text-2xl">
              UI/UX
            </a>
          </Link>
          <Link href={`/playlist/carreira`}>
            <a className="w-full xl:h-[176px] h-28 flex justify-center items-center 
              bg-brand-200 rounded-md text-2xl">
              Carreira
            </a>
          </Link>
        </div>
      </Container>
    </div>
  )
}