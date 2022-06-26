import { ReactElement, useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { DefaultUi, Player, Youtube } from "@vime/react";
import { DiscordLogo, YoutubeLogo } from 'phosphor-react'
import '@vime/core/themes/default.css'
import { Get_VideoBySlug } from "../../querys";
import Link from "next/link";
import { Footer } from "../Footer";
import { useRouter } from "next/router";

interface SectionPlayer {
  slug: string;
}

export const SectionPlayer = ({ slug }: SectionPlayer): ReactElement => {
  const [currentSlug, setCurrentSlug] = useState(slug)
  const router = useRouter()
  const { slug: querySlug } = router.query

  useEffect(() => {
    if (!querySlug) {
      setCurrentSlug(slug)
    }
    else {
      setCurrentSlug(querySlug as string)
    }

  }, [slug, querySlug])

  const { data } = useQuery<any>(Get_VideoBySlug, {
    variables: {
      slug: currentSlug || slug
    }
  })

  if (!data) {
    return (
      <div className="flex-1 bg-blue-800 ">
        <p>carregando...</p>
      </div>
    )
  }
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1 p-5">
        <div className="bg-blue-800 flex justify-center">
          <div className="h-full w-full max-w-[1200px] max-h-[40vh] aspect-video">
            <Player>
              <Youtube cookies={true} videoId={data!.video.videoId || ""} />
              <DefaultUi />
            </Player>
          </div>
        </div>
        <div className="border-t border-gray-200 my-4" />
        <div className="max-w[1100px] lg:max-h-[300px] mx-auto flex flex-col items-center">
          <div className="flex lg:flex-row flex-col items-start justify-between w-full gap-16 mb-7">
            <div className="flex-1">
              <h1 className="lg:text-2xl text-lg font-bold">
                {data.video.title || ""}
              </h1>
              <p className="mt-4 text-gray-200">
                {data.video.title || ""}
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-auto">
              <Link href={`https://www.youtube.com/c/${data.video.channel}`}>
                <a
                  className="p-4  text-sm bg-red-600 text-white flex 
                items-center rounded font-bold uppercase gap-2 justify-center 
                hover:bg-red-700 hover:text-white transition-colors hover:border-none"
                  target="_blank"
                >
                  <YoutubeLogo size={24} weight="fill" />
                  Acessar o canal
                </a>
              </Link>
              <a
                className="p-4 text-sm bg-purple-500 flex items-center text-white
              rounded font-bold uppercase gap-2 justify-center hover:bg-purple-700 transition-colors"
                href="#"
              >
                <DiscordLogo size={24} weight="fill" />
                Nossa comunidade no Discord
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:pr-4">
        <Footer />
      </div>
    </div>
  )
}