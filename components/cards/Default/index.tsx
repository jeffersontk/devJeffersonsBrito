import Link from "next/link";
import { ReactElement } from "react";
import styled from 'styled-components'
import { CardsProps } from "..";

type bgCard = {
  image: string;
}
const BackgroundCard = styled.div<bgCard>`
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
    color: #323238;
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
  color: #323238;
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
      className="rounded-md bg-white-100"
    >
      <div className="
      min-w-60 h-96 px-5 rounded-md flex flex-col 
      items-center
       gap-2
       ">
        <div
          className="flex flex-col min-w-60 h-[330px]
          max-w-60 w-60
          items-center justify-center hover:justify-start
          py-3 gap-3"
        >
          <Title id="title">{title}</Title>
          <Description>{description}</Description>
        </div>
        <div className="w-full flex justify-end border-t border-gray-500 pt-2">
          <Link href={link || '/Projects'}>
            <a className="text-gray-500 text-lg">
              Saiba mais
            </a>
          </Link>
        </div>
      </div>
    </BackgroundCard>
  )
}