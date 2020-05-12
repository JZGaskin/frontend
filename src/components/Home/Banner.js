import React from "react"
import Background from "./Background"
import styled from "styled-components"

const HomeBanner = () => {
  return (
    <Background>
      <Content>
        <h1>
          web development &
          <br />
          programming
          <br />
          Portfolio
        </h1>
      </Content>
    </Background>
  )
}

export default HomeBanner

const Content = styled.div`
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  letter-spacing: 0.5rem;
  line-height: 1.25;
`
