import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../images/jzglogo1.svg"

const Brand = () => {
  return (
    <Link to="/">
      <Image src={logo} alt="Company Logo"></Image>
    </Link>
  )
}

export default Brand

const Image = styled.img`
  height: auto;
  margin: auto;
  padding-top: 3.5%;
`
