import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 })

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <Link to="/showcase/" onClick={props.handleNavbar}>
              Showcase
            </Link>
          </li>
          <li>
            <Link to="/knowledge/" onClick={props.handleNavbar}>
              Knowledge
            </Link>
          </li>
          <li>
            <Link to="/blog/" onClick={props.handleNavbar}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/identity/" onClick={props.handleNavbar}>
              Identity
            </Link>
          </li>
          <li>
            <Link to="/social/" onClick={props.handleNavbar}>
              Social
            </Link>
          </li>
        </NavLinks>
      </CollapseWrapper>
    )
  }
  return null
}

export default CollapseMenu

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 5rem;
  left: 0;
  right: 0;
  z-index: 2;

  @media (min-width: 992px) {
    display: none;
  }
`

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #fff;
    text-transform: capitalize;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fff;
      border-bottom: 1px solid #fff;
    }
  }
`
