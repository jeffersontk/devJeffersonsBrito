import Link from "next/link";
import { ReactElement } from "react";
import { Carousel, Container } from "../../Carousel";

export const Posts = (): ReactElement => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-center">
      <Carousel
        title="Posts"
        styleCard='Default'
        slides={[
          {
            imageBackground: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            title: 'Projeto 1',
            description: 'Descrição do projeto 1',
            link: '/Posts',
          },
          {
            imageBackground: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            title: 'Projeto 2',
            description: 'Descrição do projeto 3 asdasd asdasdhoiasjd akjsdlaksjdlaksjdç laksjdçlaksjd çlaskjdçalskdaçlskdaçslkdjaçsldkja hasuhdajsdash',
            link: '/Posts',
          },
          {
            imageBackground: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            title: 'Projeto 3',
            description: 'Descrição do projeto 3',
            link: '/Posts',
          },
          {
            imageBackground: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            title: 'Projeto 2',
            description: 'Descrição do projeto 3 asdasd asdasdhoiasjd akjsdlaksjdlaksjdç laksjdçlaksjd çlaskjdçalskdaçlskdaçslkdjaçsldkja hasuhdajsdash',
            link: '/Posts',
          },
          {
            imageBackground: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            title: 'Projeto 3',
            description: 'Descrição do projeto 3',
            link: '/Posts',
          },
          {
            imageBackground: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            title: 'Projeto 2',
            description: 'Descrição do projeto 3 asdasd asdasdhoiasjd akjsdlaksjdlaksjdç laksjdçlaksjd çlaskjdçalskdaçlskdaçslkdjaçsldkja hasuhdajsdash',
            link: '/Posts',
          },
          {
            imageBackground: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            title: 'Projeto 3',
            description: 'Descrição do projeto 3',
            link: '/Posts',
          },
          {
            imageBackground: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            title: 'Projeto 2',
            description: 'Descrição do projeto 3 asdasd asdasdhoiasjd akjsdlaksjdlaksjdç laksjdçlaksjd çlaskjdçalskdaçlskdaçslkdjaçsldkja hasuhdajsdash',
            link: '/Posts',
          },
          {
            imageBackground: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            title: 'Projeto 3',
            description: 'Descrição do projeto 3',
            link: '/Posts',
          }
        ]}
      />
      <div className="flex w-full">
        <Container>
          <div className="flex h-[42px] mb-2">
            <h1 className="text-white font-medium text-2xl">Playlist Recomendadas</h1>
          </div>
          <div className="grid xl:grid-cols-3 grid-cols-2 grid-flow-row gap-6">
            <Link href={`/playlist/iniciante`}>
              <a className="w-full xl:h-[176px] h-28 flex justify-center items-center 
              bg-blue-800 rounded-md text-2xl">
                Iniciante
              </a>
            </Link>
            <Link href={`/playlist/frontend`}>
              <a className="w-full xl:h-[176px] h-28 flex justify-center items-center 
              bg-blue-800 rounded-md text-2xl">
                Front-end
              </a>
            </Link>
            <Link href={`/playlist/backend`}>
              <a className="w-full xl:h-[176px] h-28 flex justify-center items-center 
              bg-blue-800 rounded-md text-2xl">
                Back-end
              </a>
            </Link>
            <Link href={`/playlist/uiux`}>
              <a className="w-full xl:h-[176px] h-28 flex justify-center items-center 
              bg-blue-800 rounded-md text-2xl">
                UI/UX
              </a>
            </Link>
            <Link href={`/playlist/carreira`}>
              <a className="w-full xl:h-[176px] h-28 flex justify-center items-center 
              bg-blue-800 rounded-md text-2xl">
                Carreira
              </a>
            </Link>
            <Link href={`/playlist/ia`}>
              <a className="w-full xl:h-[176px] h-28 flex justify-center items-center 
              bg-blue-800 rounded-md text-2xl">
                I.A
              </a>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}