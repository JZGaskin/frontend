import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Background = ({ children }) => {
  const { file } = useStaticQuery(query)

  return (
    <BackgroundImage
      Tag="section"
      fluid={file.childImageSharp.fluid}
      className="background"
    >
      {children}
    </BackgroundImage>
  )
}

export default Background

const query = graphql`
  query {
    file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
