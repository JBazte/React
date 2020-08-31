import React, { FC } from 'react'

type Props = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<Props> = ({ value, onChange }) => <input type="text" value={value} onChange={onChange} />

export default Input
