import React, { useState, FC } from 'react'
import Headline from '../../components/Headline'
import Button from '../../components/Button'
import Input from '../../components/Input'

const Home: FC = () => {
  const [value, setValue] = useState<string>('')
  const [list, setList] = useState<string[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (value) setList(list.concat(value))

    setValue('')

    event.preventDefault()
  }

  const handleDelete = (value: string): void => {
    setList(list.filter((item) => item !== value))
  }

  return (
    <div className="App">
      <header className="App-header">
        <Headline title="TODO Task App" />
        <Input value={value} onChange={handleChange} />
        <br />
        <Button label="Add" onClick={handleSubmit} />
        <br />
        <ul>
          {list.map((item, id) => (
            <li key={id}>
              {item}
              <Button label="Delete" onClick={() => handleDelete(item)} />
            </li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default Home
