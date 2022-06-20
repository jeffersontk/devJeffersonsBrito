import Image, { StaticImageData } from "next/image";
import { ReactElement, useEffect, useState } from "react";
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
  alt: string;
}

const randomMovement = ({ x = -200, y = 200 }: ballProps) => {
  return keyframes`
  0% {
    transform: translate(${random(x, 3)}px, ${random(10, y)}px);
  }
  100% {
  transform:  translate(${random(y, 15)}px, ${random(-25, x)}px);
`
}

const BallStacksStyled = styled.div<ballProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #2b3656;
  padding: 0.5rem;
  width 5rem;
  height: 5rem;
  animation: ${(props) => {
    return randomMovement(props)
  }} 10s infinite linear alternate;
  `

export const BallStacks = ({ skill, alt }: Props): ReactElement => {
  const [randomValues, setRandomValues] = useState<ballProps>(
    { x: -200, y: 200 }
  )
  useEffect(() => {
    setRandomValues({
      x: Math.random() * (-30 - -100) + -100,
      y: Math.random() * (-100 - 30) + 10
    })
  }, [alt])

  const { x, y } = randomValues;
  return (
    <BallStacksStyled x={x} y={y}>
      <Image src={skill} className="rounded-full w-full h-full" alt={alt} title={alt} />
    </BallStacksStyled>
  )
}

