import { gql } from "@apollo/client";

/* export interface playlistsProps {
    id: string;
    areatech: string;
    videos: VideosProps[]
}

export interface VideosProps {
  id: string;
  title: string;
  description: string;   
  videoId: string;
  tech:string;
  slug: string;
} */

export const Get_Playlist_By_Areatech = gql`
  query PlaylistByAreaTech($areatech: AreaTech) {
    playlists(where: {areatech: $areatech}) {
      id
      areatech
      videos {
        title
        id
        description
        videoId
        tech
        slug
        channel
      }
    }
  }
`
export interface GetPlaylistProps {
  playlists:{
    id: string;
    areatech: string;
  }[]
}
export const Get_Playlists = gql`
  query PlaylistByAreaTech {
    playlists {
      id
      areatech
    }
  }
`
export interface VideoProps {
  video:{
    id: string;
    title: string;
    tech: string;
    videoId: string;
    areatech: string;
    description: string;
    channel: string;
  }
}

export const Get_VideoBySlug = gql`
  query GetVideoBySlug($slug: String) {
    video(where: {slug: $slug}) {
      title
      tech
      videoId
      areatech
      description
      id
      channel
    }
  }
`