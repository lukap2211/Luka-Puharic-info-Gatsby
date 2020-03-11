import React from 'react'
import styled from 'styled-components'

const ExpWrap = styled.div`
  margin: 0 0 40px;
`

const ExpTop = styled.header`
  display: grid;
  grid-template-columns: 70% auto;
  text-transform: uppercase;
  font-size: 0.8em;
  color: var(--light);
  div + div {
    justify-self: end;
  }
`

const ExpTitle = styled.h3`
  font-weight: bold;
  margin: 5px 0;
`

class Education extends React.Component {
  render() {
    const { dateTo, title, institution } = this.props.data

    return (
      <ExpWrap>
        <ExpTop>
          <div>{institution}</div>
          <div>{dateTo}</div>
        </ExpTop>
        <div>
          <ExpTitle>{title}</ExpTitle>
        </div>
      </ExpWrap>
    )
  }
}

export default Education
