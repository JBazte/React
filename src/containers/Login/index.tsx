import React, { FC } from 'react'
import Headline from '../../components/Headline'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'
import Hyperlink from '../../components/Hyperlink'
import styled from 'styled-components'

const Login: FC = () => {
  return (
    <ContainerStyled>
      <CardContainerStyled>
        <Headline title="Sign In" />
        <InputContainerStyled>
          <Input placeholder="Enter email" />
        </InputContainerStyled>
        <InputContainerStyled>
          <Input placeholder="Enter password" />
        </InputContainerStyled>
        <br />
        <Checkbox label="Remember me" />
        <br />
        <InputContainerStyled>
          <Button label="Submit" />
        </InputContainerStyled>
        <br />
        <HyperlinkContainerStyled>
          Forgot <Hyperlink href="#">password?</Hyperlink>
        </HyperlinkContainerStyled>
      </CardContainerStyled>
    </ContainerStyled>
  )
}

const ContainerStyled = styled.div`
  background: #1c8cf6;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardContainerStyled = styled.div`
  background: white;
  width: 350px;
  padding: 50px;
  border-radius: 15px;
`

const InputContainerStyled = styled.div`
  padding-top: 20px;
`

const HyperlinkContainerStyled = styled.div`
  float: right;
`

export default Login
