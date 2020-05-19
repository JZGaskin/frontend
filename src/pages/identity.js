import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Title from "../components/Title"

export default ({ data }) => (
  <Layout>
    <Section>
      <Title title="Identity" />
      <Gridtainer>
        <Bioimage>
          <Img fixed={data.file.childImageSharp.fixed} />
        </Bioimage>
        <Bio>
          <Biohead>Bio - Who am I?</Biohead>
          {/* <p>
            Hello, I'm JZ Gaskin. I am many things and all of them are pretty
            tech-nerdy. I've found that I enjoy working on complicated projects
            that also can become useful tools. I've had a career as a scientist
            and now I'm looking to do something creative that I enjoy.
            Personally, my motto is "better every day". I try to take that
            philosophy with me in everything I do.
          </p> */}
          <p>
            The better question is, how do I engage life? Who I am is an ongoing
            process becasue I believe in learning and growth. Programming and
            web development is an extention of who I am becasue its an ever
            changing field that I find intriguing. The persona you see is an
            aspect of my ethos and my creative outlet. My motivation and drive
            is to get better everyday.
          </p>
        </Bio>
        <Job1>
          <Jobhead>GFI Laboratory</Jobhead>
          <h4>Tech Entreprenuer</h4>
          <p>
            I developed entire systems that are still in use today. Apps
            included complex statistical calclations using the Visual Basic
            language and a Lab Info Management System for tracking samples. I
            developed the company's e-commerce website, managed SEO and online
            advertising.
          </p>
        </Job1>
        <Job2>
          <Jobhead>Little Eagle Football</Jobhead>
          <h4>President & Tech Guy</h4>
          <p>
            I spent 4 years coaching football and governing this non-profit and
            continue their website management. Elements of the website include a
            custom e-commerce registration form for participants, easy data to
            the organizers and a text group feature for effective communication.
          </p>
        </Job2>
        <Job3>
          <Jobhead>Z33 Design Co.</Jobhead>
          <h4>Full Stack Web Developer</h4>
          <p>
            My current start-up and creative outlet. This company is all things
            web and my job is to create and create and create... I am proficient
            in several programming languages but, more importantly, I know how
            to assemble projects into useful things. This project encapsulates
            my broad experience in progress.
          </p>
        </Job3>
      </Gridtainer>
    </Section>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "portrait250.jpg" }) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const Section = styled.div`
  margin: 5.5rem auto;
  min-height: calc(100vh - 18rem);
  padding: 4rem 0;
  width: 90vw;
  max-width: 1170px;
`

const Gridtainer = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "bioimage bio bio"
    "job1 job2 job3";
  margin-top: 80px;

  @media screen and (max-width: 812px) {
    grid-template-areas:
      "bioimage"
      "bio"
      "job1"
      "job2"
      "job3";
    grid-template-columns: 1fr;
  }
`
const Bioimage = styled.div`
  grid-area: bioimage;
  margin: auto;
  border-radius: 50%;
  border: var(--clr-primary-dark) 3px solid;
  overflow: hidden;
`
const Bio = styled.div`
  grid-area: bio;
  font-size: 1.5rem;
`
const Biohead = styled.h3`
  color: var(--clr-primary-dark);
`
const Job1 = styled.div`
  grid-area: job1;
  background: #f6f4f4;
  font-size: 1.5rem;
  padding: 1.5rem;
  border-bottom: var(--clr-primary-dark) 5px solid;
`
const Job2 = styled.div`
  grid-area: job2;
  background: #f6f4f4;
  font-size: 1.5rem;
  padding: 1.5rem;
  border-bottom: var(--clr-primary-dark) 5px solid;
`
const Job3 = styled.div`
  grid-area: job3;
  background: #f6f4f4;
  font-size: 1.5rem;
  padding: 1.5rem;
  border-bottom: var(--clr-primary-dark) 5px solid;
`
const Jobhead = styled.h4`
  color: var(--clr-primary-dark);
  font-size: 20px;
`
