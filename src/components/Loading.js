import React from 'react'
import styled from 'styled-components'

// Another way to import
// import DotLoader from 'react-spinners/DotLoader'

const LoadingWrap = styled.h1`
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  grid-column-start: 1;
  grid-column-end: span 12;
  s div > div {
    background-color: var(--primary-color);
  }
`

class Loading extends React.Component {
  render() {
    return <LoadingWrap>Loading....</LoadingWrap>
  }
}
export default Loading
