import React from "react"
import PropTypes from "prop-types"
import NavApp from "./Navbar/NavApp"
import Footer from "./Footer/footer"
import GlobalStyles from "./Global"
import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Site>
        <NavApp />
        <SiteContent>{children}</SiteContent>
        <Footer />
      </Site>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

//Sticky Footer
const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`
const SiteContent = styled.div`
  flex-grow: 1;
`
