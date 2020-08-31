import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  label: string
}

const Checkbox: FC<Props> = ({ label }) => (
  <>
    <input name={label} type="checkbox" checked={false} onChange={() => null} />
    <CheckboxStyled>{label}</CheckboxStyled>
  </>
)

const CheckboxStyled = styled.span`
  font-size: 16px;
  padding-left: 8px;
`

export default Checkbox
