import { ReactElement, useEffect, useRef, useState } from "react";
import { Header } from "../../components/Header";
import { SectionPlayer } from "../../components/SectionPlayer";
import { SideBar } from "../../components/SideBar";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GetPlaylistProps, Get_Playlists, Get_Playlist_By_Areatech } from "../../querys";
import { client } from "../../lib/apollo";


const PlayList = (): ReactElement => {
  const isFirstRender = useRef(true)
  const [playlist, setPlaylist] = useState()
  const router = useRouter()
  const { tag } = router.query

  const { data } = useQuery(Get_Playlist_By_Areatech, {
    variables: {
      areatech: tag
    }
  })
  /* 
      const { data } = useQuery<GetPlaylistProps>(Get_Playlists) */
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (data) {
      console.log('playlists', data)
      setPlaylist(data.playlists)
    }
  }, [data])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 justify-center">
        <main className="w-full xl:max-w-screen-2xl md:max-w-screen-xl flex ">
          {/*   {
            slug
              ? <SectionPlayer lessonSlug={slug} />
              : <div className="flex-1"></div>
          } */}
          <div className="flex-1"></div>
          <SideBar />
        </main>
      </div>
    </div>
  )
}

/* export async function getStaticProps({ params }: any) {
  console.log('params')

  console.log('check params', params)
    const { data } = useQuery(Get_Playlist_By_Areatech, {
      variables: {
        areatech: tag
      }
    })
    console.log('playlist with videos', data)
  
  return {
    props: ""
  }
} */
/* 
export async function getStaticPaths() {
  const { data } = await client.query<GetPlaylistProps>({ query: Get_Playlists })
  console.log('playlists', data.playlists)

  const paths = data.playlists.map((item: any) => ({ params: { tag: item.areatech } }));
  console.log('check paths', paths)
  return {
    paths: paths || [],
    fallback: false
  }
} */

export default PlayList