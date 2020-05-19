import React from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"
import { Link } from "gatsby"
import Brand from "./Brand"
import BurgerMenu from "./BurgerMenu"
import CollapseMenu from "./CollapseMenu"
import { SocialNav } from "./SocialNav"

const Navbar = props => {
  //   const barAnimation = useSpring({
  //     from: { transform: "translate3d(0, -10rem, 0)" },
  //     transform: "translate3d(0, 0, 0)",
  //   })

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 400,
    config: config.wobbly,
  })

  return (
    <>
      <NavBar>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <Link to="/showcase/">Showcase</Link>
            <Link to="/knowledge/">Knowledge</Link>
            <Link to="/blog/">Blog</Link>
            <Link to="/identity/">Identity</Link>
          </NavLinks>
          <SocialNav />
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 3;
  font-size: 1.3rem;
  height: 5.5rem;
  padding: 0 2rem;
`

const FlexContainer = styled.div`
  max-width: 100rem;
  display: flex;
  margin: auto;
  justify-content: space-between;
  height: 5rem;
`

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #143f56;
    text-transform: capitalize;
    font-weight: 300;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    font-family: var(--ff-slogan);

    &:hover {
      color: #000e24;
      box-shadow: 0 1px #000e24;
    }

    @media (max-width: 992px) {
      display: none;
    }
  }
`

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 992px) {
    display: none;
  }
`
