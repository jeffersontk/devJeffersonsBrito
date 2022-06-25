import { ReactElement, useEffect, useRef, useState } from "react";
import { Header } from "../../components/Header";
import { SectionPlayer } from "../../components/SectionPlayer";
import { SideBar } from "../../components/SideBar";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GetPlaylistProps, Get_Playlists, Get_Playlist_By_Areatech } from "../../querys";

const PlayList = (): ReactElement => {
  const isFirstRender = useRef(true)
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
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (data) {
      setPlaylist(data.playlists)
    }
    if (playlist) {
      setSlugFirstVideo(playlist[0]?.videos[0].slug)
    }
  }, [data, playlist])

  if (!playlist) {
    return (
      <div>
        <h1>carregando...</h1>
      </div>
    )
  }
  return (
    <div className="flex flex-col min-h-screen bg-blue-900">
      <Header />
      <div className="flex flex-1 justify-center">
        <main className="w-full xl:max-w-screen-2xl md:max-w-screen-xl flex ">
          {
            slugFirstVideo
              ? <SectionPlayer slug={slugFirstVideo} />
              : <div className="flex-1"></div>
          }
          <SideBar videos={playlist[0]?.videos} />
        </main>
      </div>
    </div>
  )
}

export default PlayList