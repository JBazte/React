import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  label: string
}

const Button: FC<Props> = ({ label }) => <ButtonStyled>{label}</ButtonStyled>

const ButtonStyled = styled.button`
  background: #1c8cf6;
  padding: 10px;
  border: none;
  width: 100%;
  border-radius: 2.5px;
  font-weight: bold;
  color: white;
  font-size: 15px;
`

export default Button
