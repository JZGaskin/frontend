import React, { Component } from "react"
import Navbar from "./Navbar"

import GlobalStyle from "../Global"

class NavApp extends Component {
  state = {
    navbarOpen: false,
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
      </>
    )
  }
}

export default NavApp
