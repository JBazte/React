import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  title: string
}

const Headline: FC<Props> = ({ title }) => <HeadingStyled>{title}</HeadingStyled>

const HeadingStyled = styled.h1`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 35px;
  display: flex;
  justify-content: center;
`

export default Headline
