import { ReactElement } from "react";
import styled from 'styled-components'
import { CardsProps } from "..";

type bgCard = {
  image: string;
}
const BackgroundCard = styled.div<bgCard>`
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover h1 {
    font-size: 1.4rem;
    transition: all 0.5s ease-in-out;
  }
  &:hover p {
    display: block;
    visibility: visible;
    width: 100%;
    color: #f5f5f5;
    font-size: 1.2rem;
    text-overflow: ellipsis;
    overflow: hidden;
    transition: all 0.5s ease-in-out;

    animation: fadeIn 0.5s ease-in-out;

    @keyframes fadeIn {
      from {
        transform: translateY(-50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
        }
    }
  }

`
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #f5f5f5;
  text-align: center;

`
const Description = styled.p`
  display: none;
`

export const Card = ({
  imageBackground,
  title,
  description,
  link,
}: CardsProps): ReactElement => {
  return (
    <BackgroundCard
      image={imageBackground}
      className="rounded-md"
    >
      <div className="
      min-w-60 h-72 px-5 rounded-md flex flex-col 
      items-center
       gap-2 hover:bg-black hover:bg-opacity-25
       ">
        <div
          className="flex flex-col min-w-60 h-56
          max-w-60 w-60
          items-center justify-center hover:justify-start
          py-3 gap-3"
        >
          <Title id="title">{title}</Title>
          <Description>{description}</Description>
        </div>
        <span className="w-full h-0.5 bg-white" />
        <div className="w-full flex justify-end">
          <a href={link} className="text-white text-lg">
            Saiba mais
          </a>
        </div>
      </div>
    </BackgroundCard>
  )
}