import { CaretCircleLeft, CaretCircleRight } from "phosphor-react";
import { ReactElement, useRef } from "react";
import './styles.module.css';
import styled from "styled-components";
import { CardsProps, typeCard } from "../cards";

type Props = {
  slides: CardsProps[];
  styleCard: "Default" | "Polaroid";
  title: string;
}

export const Container = styled.article`
  height: 30rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const CarouselStyled = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  gap: 1rem;
`


export const Carousel = ({ slides, styleCard, title }: Props): ReactElement => {
  const carousel = useRef<null | HTMLDivElement>(null);

  const handleLeftClick = (e: any) => {
    e.preventDefault();
    if (carousel.current) carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e: any) => {
    e.preventDefault();
    if (carousel.current) carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <Container>
      <div className="flex items-center justify-between mb-3">
        <label className='text-white font-medium text-3xl'>{title}</label>
        <div className="flex gap-3">
          <CaretCircleLeft
            onClick={handleLeftClick}
            size={42}
            color="#f5f5f5"
            weight="fill"
            cursor="pointer"
          />
          <CaretCircleRight
            onClick={handleRightClick}
            size={42}
            color="#f5f5f5"
            weight="fill"
            cursor="pointer"
          />
        </div>
      </div>
      <CarouselStyled ref={carousel}>
        {slides.map((slide, index) => (
          <div key={index}>
            {typeCard[styleCard](slide)}
          </div>
        ))}
      </CarouselStyled>
    </Container>
  )
}