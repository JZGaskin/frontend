import React from "react"
import styled from "styled-components"

const Title = ({ title }) => {
  return (
    <Banner>
      <h2>{title}</h2>
      <Uline></Uline>
    </Banner>
  )
}

export default Title

const Banner = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

const Uline = styled.div`
  height: 0.25rem;
  width: 5rem;
  background: var(--clr-primary);
  margin: 0 auto;
`
