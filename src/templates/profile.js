import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ProfileTemplate = ({ name, description, summary, interests }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {name}
              </h2>
              {description}
              <br />
              {summary}
              <br />
              {interests}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ProfileTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
}

const ProfilePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout summary={post.frontmatter.summary}>
      <ProfileTemplate
        name={post.frontmatter.name}
        description={post.frontmatter.description}
        summary={post.frontmatter.summary}
        interests={post.frontmatter.interests}
      />
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
