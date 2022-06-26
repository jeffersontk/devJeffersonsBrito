import { ReactElement, useEffect, useRef, useState } from "react";
import { Header } from "../../components/Header";
import { SectionPlayer } from "../../components/SectionPlayer";

import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GetPlaylistProps, Get_Playlists, Get_Playlist_By_Areatech } from "../../querys";
import { VideoCameraSlash } from "phosphor-react";
import { SideBar } from "../../components/SideBar";

const PlayList = (): ReactElement => {
  const [isMobile, setIsMobile] = useState(false)
  const isFirstRender = useRef(true)
  const [isFetching, setIsFetching] = useState(true)
  const [playlist, setPlaylist] = useState<any>()
  const [slugFirstVideo, setSlugFirstVideo] = useState()
  const router = useRouter()
  const { tag } = router.query

  const { data } = useQuery(Get_Playlist_By_Areatech, {
    variables: {
      areatech: tag
    }
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const windowWidth = window.innerWidth
      setIsMobile(windowWidth < 768)
    }
  }, [])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (data) {
      setIsFetching(false)
      setPlaylist(data.playlists)
    } else {
      setTimeout(() => {
        setIsFetching(false)
      }, 2000)
    }
    if (playlist !== undefined && playlist[0]?.videos.length > 0) {
      setSlugFirstVideo(playlist[0]?.videos[0].slug)
    }
  }, [data, playlist])

  if (isFetching) {
    return (
      <div className="bg-blue-800 ">
        <Header />
        <div className="flex flex-1 flex-col gap-6 justify-center h-screen items-center">
          <h1 className="text-xl">Buscando Video ...</h1>
          <svg role="status" className="w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
        </div>
      </div>
    )
  }
  if (playlist && playlist[0]?.videos.length > 0) {
    return (
      <div className="flex flex-col min-h-screen bg-blue-900">
        <Header videos={playlist[0]?.videos} />
        <div className="flex flex-1 justify-center">
          <main className="w-full xl:max-w-screen-2xl md:max-w-screen-xl flex ">
            {
              slugFirstVideo
                ? <SectionPlayer slug={slugFirstVideo} />
                : <div className="flex-1"></div>
            }
            <div className={isMobile ? 'hidden' : 'flex'}>
              <SideBar videos={playlist[0]?.videos} />
            </div>
          </main>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-blue-800 ">
      <Header />
      <div className="flex flex-1 flex-col gap-6 justify-center h-screen items-center">
        <VideoCameraSlash size={80} color="#f5f5f5" weight="fill" />
        <h1 className="text-xl text-center px-6">Nenhum video adicionado a essa playlist ainda!</h1>
      </div>
    </div>
  )
}

export default PlayList