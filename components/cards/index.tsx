import { ReactElement } from "react";
import { Card } from "./Default";
import { PolaroidCard } from "./PolaroidCard";

export type CardsProps = {
  imageBackground: string;
  title: string;
  description: string;
  link?: string;
}

export const typeCard = {
  Default({ imageBackground, title, description, link }: CardsProps): ReactElement {

    return <Card
      imageBackground={imageBackground}
      title={title}
      description={description}
      link={link}
    />
  },
  Polaroid({ imageBackground, title, description, link }: CardsProps): ReactElement {
    return <PolaroidCard
      imageBackground={imageBackground}
      title={title}
      description={description}
      link={link}
    />
  }
}