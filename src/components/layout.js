import React from "react"
import PropTypes from "prop-types"
import NavApp from "./Navbar/NavApp"
import GlobalStyles from "./Global"

const Layout = ({ children }) => {
  return (
    <main>
      <GlobalStyles />
      <NavApp></NavApp>
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
