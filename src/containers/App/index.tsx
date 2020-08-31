import React, { FC } from 'react'
import Login from '../Login'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    font-family: Roboto;
    margin: 0px;
    padding: 0px;
  }
`
const defaultTheme = {}

const App: FC = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={{ ...defaultTheme }}>
        <Login />
      </ThemeProvider>
    </div>
  )
}

export default App
