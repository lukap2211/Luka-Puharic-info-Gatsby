import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Section from '../components/Section'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Profile = styled.section`
  margin: 0 auto;
  padding: 0px 20px 40px;
  max-width: 900px;
  display: grid;
  column-gap: 4.28571%;
  grid-auto-flow: row;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 4.28571%;
  grid-row-gap: 50px;
  @media (max-width: 600px) {
    display: block;
  }
`

export const ProfileTemplate = ({
  description,
  summary,
  interests,
  linkedinImage: profileImage,
  experience,
  education,
  skills,
  profile,
}) => {
  return (
    <Profile>
      {/* <Nav
        profileImage={profileImage}
        darkThemeOnOff="on"
        darkTheme="this.state.darkTheme"
      /> */}
      <Header {...profile} />
      <Section type="profile" data={description} />
      <Section type="summary" data={summary} />
      <Section type="experience" data={experience} />
      <Section type="education" data={education} />
      <Section type="skills" data={skills} />
      <Section type="interests" data={interests} />
      <Footer {...profile} />
    </Profile>
  )
}

ProfileTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
}

const ProfilePage = ({
  data: {
    markdownRemark: { frontmatter: info },
  },
}) => {
  const profile = {
    name: info.name,
    email: info.email,
    phone: info.phone,
    linkedin: info.linkedin,
    github: info.github,
  }
  return (
    <Layout info={info}>
      <ProfileTemplate {...info} profile={profile} />
    </Layout>
  )
}

ProfilePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProfilePage

export const profileQuery = graphql`
  query ProfilePage {
    markdownRemark {
      frontmatter {
        name
        phone
        email
        description
        summary
        linkedin
        github
        linkedinImage
        email
        phone
        interests
        experience {
          company
          dateFrom
          dateTo
          description
          location
          technologies
          title
        }
        education {
          dateTo
          institution
          title
        }
        skills {
          skill
          rating
        }
      }
    }
  }
`
