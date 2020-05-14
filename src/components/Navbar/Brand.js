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
  width: 250px;
  height: auto;
  margin: auto;
  padding-top: 3.5%;

  @media (max-width: 992px) {
    width: 175px;
    height: auto;
    margin: auto;
    padding-top: 10%;
  }
`
