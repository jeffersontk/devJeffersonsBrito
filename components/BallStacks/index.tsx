import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";
import JavascriptIMG from "../../assets/javascript.jpg";
import styled, { keyframes } from "styled-components";

export const random = (min: number, max: number) => {
  let result = Math.random() * (max - min) + min;
  return parseInt(result.toFixed(0));
}

type ballProps = {
  x: number;
  y: number;
}
type Props = {
  x: number;
  y: number;
  skill: StaticImageData;
}

const randomMovement = ({ x = -200, y = 200 }: ballProps) => keyframes`
  0% {
    transform: translate(${random(x, y)}px, ${random(y, x)}px);
  }
  50% {
    transform: translate(${random(x, y)}px, ${random(y, x)}px);
  }
  100% {
    transform: translate(${random(x, y)}px, ${random(y, x)}px);
`

const BallStacksStyled = styled.div<ballProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-radius: 100%;
  background-color: #2b3656;
  padding: 0.5rem;
  width 4rem;
  height: 4rem;
  animation: ${(props) => randomMovement(props)} 5s infinite linear alternate;
  `

export const BallStacks = ({ x = -200, y = 200, skill }: Props): ReactElement => {
  return (
    <BallStacksStyled x={x} y={y}>
      <Image src={skill} className="rounded-full w-full h-full" />
    </BallStacksStyled>
  )
}