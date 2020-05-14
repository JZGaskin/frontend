import React from "react"
import styled from "styled-components"
import logo from "../../images/white-jzglogo1.svg"
import SocialFoot from "./socialft"

const Footer = () => {
  return (
    <FooterWrap>
      <Image src={logo} alt="Company Logo"></Image>
      <SocialFooter>
        <SocialFoot />
      </SocialFooter>
      <Copyright>
        © {new Date().getFullYear()} JZ Gaskin. All rights reserved
      </Copyright>
    </FooterWrap>
  )
}

export default Footer

const FooterWrap = styled.footer`
  text-align: center;
  justify-content: center;
  /* padding: 1rem; */
  color: var(--clr-white);
  background: var(--clr-primary);
  /* height: 100px; */
  display: flex;
  flex-direction: column;
`
const Image = styled.img`
  width: 300px;
  height: auto;
  margin: auto;
  padding-top: 1.5%;

  @media (max-width: 992px) {
    width: 175px;
    height: auto;
    margin: auto;
    padding-top: 3%;
  }
`
const SocialFooter = styled.div`
  /* display: flex; */
  margin: auto;
  /* justify-content: space-between; */
  /* height: 5rem; */
`

const Copyright = styled.div`
  margin: 0.5rem 0;
`
