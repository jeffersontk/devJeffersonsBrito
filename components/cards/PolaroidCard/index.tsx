import { ReactElement } from "react";
import styled from 'styled-components'
import { CardsProps } from "..";

const Item = styled.div`
  background-color: #fff;
  margin: 10px;
  padding: 10px;
  width: 280px;
  flex: none;
`
const Image = styled.div`
  width: 100%;
  object-fit: cover;
`
const Content = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
`
const PolaroidTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
`
const PolaroidDescription = styled.p`
  width: 100%;
  color: #000;
  font-size: 1.2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`

export const PolaroidCard = ({
  imageBackground,
  title,
  description,
  link,
}: CardsProps): ReactElement => {
  return (
    <Item>
      <Image>
        <img src={imageBackground} alt={title} />
      </Image>
      <Content>
        <PolaroidTitle>{title}</PolaroidTitle>
        <PolaroidDescription>{description}</PolaroidDescription>
      </Content>
    </Item>
  )
}