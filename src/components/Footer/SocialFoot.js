import React from "react"
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaEnvelopeSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa"
import styled from "styled-components"

const SocialFoot = () => {
  return (
    <Social>
      <Github
        href="https://github.com/JZGaskin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare />
      </Github>
      <Twitter
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitterSquare />
      </Twitter>
      <Youtube
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutubeSquare />
      </Youtube>
      <Email
        href="mailto:jzgaskin@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelopeSquare />
      </Email>
      <Facebook
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare />
      </Facebook>
      <LinkedIn
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </LinkedIn>
    </Social>
  )
}

export default SocialFoot

const Social = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  /* line-height: 0; */
  padding-top: 1%;
  font-size: 2rem;
  margin-left: 1rem;

  @media (max-width: 992px) {
    display: none;
  }
`

const Github = styled.a`
  color: #fff;
  transition: var(--transition);
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    transform: translateY(-10%);
  }
`
const Twitter = styled.a`
  color: #55acee;
  transition: var(--transition);
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    transform: translateY(-10%);
  }
`
const Youtube = styled.a`
  color: #ff0000;
  transition: var(--transition);
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    transform: translateY(-10%);
  }
`
const Email = styled.a`
  color: var(--clr-primary-light);
  transition: var(--transition);
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    transform: translateY(-10%);
  }
`
const Facebook = styled.a`
  color: #1778f2;
  transition: var(--transition);
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    transform: translateY(-10%);
  }
`
const LinkedIn = styled.a`
  color: #0077b5;
  transition: var(--transition);
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    transform: translateY(-10%);
  }
`
