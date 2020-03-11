import React from 'react'
import styled from 'styled-components'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'

const SectionTitle = styled.h2`
  grid-column-start: 1;
  grid-column-end: span 3;
  text-transform: capitalize;
  margin: 0;
  padding: 0;
  color: var(--primary-color);
  font-size: 1.5em;

  @media (max-width: 600px) {
    margin: 20px 0 0;
    padding: 20px 0 20px;
    font-size: 2.1em;
  }
`

const SectionInfo = styled.div`
  font-size: 1em;
  line-height: 1.25;
  grid-column-start: 4;
  grid-column-end: span 9;
  overflow: hidden;
`

class Section extends React.Component {
  render() {
    const { type, data } = this.props

    const sectionInfo = data => {
      if (Array.isArray(data)) {
        return data.map((item, i) => {
          if (type === 'skills') {
            return <Skills data={item} key={i} />
          } else if (type === 'education') {
            return <Education data={item} key={i} />
          } else {
            return <Experience data={item} key={i} />
          }
        })
      } else {
        return data
      }
    }

    return (
      <React.Fragment>
        <SectionTitle id={type}>{type}</SectionTitle>
        <SectionInfo>{sectionInfo(data)}</SectionInfo>
      </React.Fragment>
    )
  }
}

export default Section
