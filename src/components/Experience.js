import React from 'react'
import styled from 'styled-components'

const ExpWrap = styled.div`
  margin: 0 0 40px;
`

const ExpTop = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  text-transform: uppercase;
  font-size: 0.8em;
  color: var(--light);
  div + div {
    justify-self: end;
  }
`

const ExpCompany = styled.h3`
  font-weight: bold;
  margin: 5px 0;
  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`

const ExpLocation = styled.div`
  color: var(--light);
  @media (max-width: 600px) {
    font-size: 1em;
  }
`

const ExpDescription = styled.p`
  margin: 10px 0;
`

const ExpTechnologies = styled.p`
  font-style: italic;
  margin: 10px 0;
`

class Experience extends React.Component {
  render() {
    const {
      dateFrom,
      dateTo,
      title,
      company,
      location,
      description,
      technologies,
    } = this.props.data

    function hasDescriptions(description) {
      if (Array.isArray(description)) {
        return description.map((desc, i) => (
          <ExpDescription key={i}>{desc}</ExpDescription>
        ))
      } else {
        return <ExpDescription>{description}</ExpDescription>
      }
    }

    function hasTechnologies(technologies) {
      if (technologies) {
        return <ExpTechnologies>Technologies: {technologies}</ExpTechnologies>
      }
    }

    return (
      <ExpWrap>
        <ExpTop>
          <div>{location}</div>
          <div>
            {dateFrom} - {dateTo ? dateTo : 'present'}
          </div>
        </ExpTop>
        <ExpCompany>{company}</ExpCompany>
        <ExpLocation>{title}</ExpLocation>
        {hasDescriptions(description)}
        {hasTechnologies(technologies)}
      </ExpWrap>
    )
  }
}

export default Experience
