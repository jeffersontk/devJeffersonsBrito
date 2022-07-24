import { ReactElement } from "react";
import { Carousel } from "../../Carousel";

export const Projects = (): ReactElement => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-center">
      <Carousel
        title="Projetos"
        styleCard='Default'
        slides={[
          {
            imageBackground: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            title: 'Projeto 1',
            description: 'Descrição do projeto 1',
            link: '/Projects',
          },
          {
            imageBackground: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            title: 'Projeto 2',
            description: 'Descrição do projeto 3 asdasd asdasdhoiasjd akjsdlaksjdlaksjdç laksjdçlaksjd çlaskjdçalskdaçlskdaçslkdjaçsldkja hasuhdajsdash',
            link: '/Projects',
          },
          {
            imageBackground: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            title: 'Projeto 3',
            description: 'Descrição do projeto 3',
            link: '/Projects',
          },
          {
            imageBackground: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            title: 'Projeto 2',
            description: 'Descrição do projeto 3 asdasd asdasdhoiasjd akjsdlaksjdlaksjdç laksjdçlaksjd çlaskjdçalskdaçlskdaçslkdjaçsldkja hasuhdajsdash',
            link: '/Projects',
          },
          {
            imageBackground: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            title: 'Projeto 3',
            description: 'Descrição do projeto 3',
            link: '/Projects',
          }
        ]}
      />
    </div>
  )
}