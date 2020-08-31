import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  href: string
  children: React.ReactNode
}

const Hyperlink: FC<Props> = ({ href, children }) => <HyperlinkStyled href={href}>{children}</HyperlinkStyled>

const HyperlinkStyled = styled.a`
  color: blue;
  text-decoration: none;
`

export default Hyperlink
