import { ReactElement, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { DefaultUi, Player, Youtube } from "@vime/react";
import { DiscordLogo, YoutubeLogo } from 'phosphor-react'
import '@vime/core/themes/default.css'
import { VideoProps } from "@vime/react/dist/types/components/Video";
import { Get_VideoBySlug } from "../../querys";
import Link from "next/link";

interface SectionPlayer {
  slug: string;
}

export const SectionPlayer = ({ slug }: SectionPlayer): ReactElement => {

  const { data } = useQuery<any>(Get_VideoBySlug, {
    variables: {
      slug
    }
  })

  if (!data) {
    return (
      <div className="flex-1">
        <p>carregando...</p>
      </div>
    )
  }
  return (
    <div className="flex-1 p-5">
      <div className="bg-blue-800 flex justify-center">
        <div className="h-full w-full max-w-[1200px] max-h-[40vh] aspect-video">
          <Player>
            <Youtube cookies={true} videoId={data!.video.videoId || ""} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="max-w[1100px] max-h-[300px] mx-auto flex flex-col items-center">
        <div className="flex items-start justify-between w-full gap-16 pt-8 mb-7">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.video.title || ""}
            </h1>
            <p className="mt-4 text-gray-200">
              {data.video.title || ""}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link href={`https://www.youtube.com/c/${data.video.channel}`}>
              <a
                className="p-4 text-sm bg-red-600 text-gray-200 flex 
                items-center rounded font-bold uppercase gap-2 justify-center 
                hover:bg-red-700 hover:text-white transition-colors hover:border-none"
                target="_blank"
              >
                <YoutubeLogo size={24} weight="fill" />
                Acessar o canal
              </a>
            </Link>
            <a
              className="p-4 text-sm bg-purple-500 flex items-center 
              rounded font-bold uppercase gap-2 justify-center hover:bg-purple-700 transition-colors"
              href="#"
            >
              <DiscordLogo size={24} weight="fill" />
              Nossa comunidade no Discord
            </a>
          </div>
        </div>
        <footer className="w-full h-8 pt-3 border-t border-gray-300 flex justify-center items-center">
          <span>@DevJeffersonBrito - Todos  os direitos reservados</span>
        </footer>
      </div>
    </div>
  )
}