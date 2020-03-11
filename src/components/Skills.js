import React from 'react'
import styled from 'styled-components'
import IntersectionVisible from 'react-intersection-visible'

const ListedItem = styled.div`
  list-style: none;
  position: relative;
  padding: 2px 5px;
  margin: 0 0 10px 0;
  font-size: 0.9em;

  &.on div {
    width: ${props => props.rating * 10}%;
  }

  span {
    float: right;
    color: var(--dark);
    opacity: 0.8;
    font-weight: bold;
  }
`

const SkillScale = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0%;
  background-color: var(--light);
  transition: all 1s;
  opacity: 0.2;
`

class Skills extends React.Component {
  state = {
    skillsOn: 'on',
  }

  hideSkill(entries) {
    this.setState({ skillsOn: 'off' })
  }

  showSkill(entries) {
    this.setState({ skillsOn: 'on' })
  }

  render() {
    const { skill, rating } = this.props.data

    return (
      <IntersectionVisible
        onHide={e => this.hideSkill(e)}
        onShow={e => this.showSkill(e)}
      >
        <ListedItem className={this.state.skillsOn} rating={rating}>
          {skill} <span>{rating}</span>
          <SkillScale />
        </ListedItem>
      </IntersectionVisible>
    )
  }
}

export default Skills
