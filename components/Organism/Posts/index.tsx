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

    </div>
  )
}