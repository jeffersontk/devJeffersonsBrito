import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";
import { ReactElement } from "react";
import { Cards, CardsProps } from "../cards";


type Props = {
  slides: CardsProps[];
}

export const Carousel = ({ slides }: Props): ReactElement => {
  return (
    <article className="">
      <div className="flex items-center justify-between">
        <label className='text-primary-light font-medium text-3xl'>Projetos</label>
        <div className="flex gap-3 px-14">
          <CaretCircleLeft size={42} color="#f5f5f5" weight="fill" cursor="pointer" />
          <CaretCircleRight size={42} color="#f5f5f5" weight="fill" cursor="pointer" />
        </div>
      </div>
      <div className='flex gap-5 overflow-hidden rounded-md py-4'>
        {slides.map((slide, index) =>
          <Cards
            key={index}
            imageBackground={slide.imageBackground}
            title={slide.title}
            description={slide.description}
            link={slide.link}
          />
        )}
      </div>
    </article>
  )
}