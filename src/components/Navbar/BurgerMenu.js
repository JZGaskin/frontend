import React from "react"
import styled from "styled-components"

const Burgermenu = props => {
  return (
    <HamburgerWrapper onClick={props.handleNavbar}>
      <div className={props.navbarState ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </HamburgerWrapper>
  )
}

export default Burgermenu

const HamburgerWrapper = styled.div`
  position: absolute;
  z-index: 3;
  right: 35px;
  top: 20px;
  cursor: pointer;
  transform: rotate(180deg);

  & span {
    background: #143f56;
    display: block;
    position: relative;
    width: 28px;
    height: 3px;
    margin: 0 0 5px 0;
    transition: all ease-in-out 0.5s;
    transform: rotate(180deg);
  }

  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
    /* top: -11px; */
  }

  .open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
    /* top: 11px; */
  }
`
