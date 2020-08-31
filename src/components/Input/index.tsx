import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  placeholder: string
}

const Input: FC<Props> = ({ placeholder }) => <InputStyled type="text" placeholder={placeholder} />

const InputStyled = styled.input`
  padding: 10px;
  border: 1px solid #d3d3d3;
  width: 97%;
  border-radius: 5px;
`

export default Input
