import React from 'react'
import styled from 'styled-components'

const ThemeSwitcher = styled.div`
  background-color: #111;
  font-size: 0.7em;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  color: ${props => (props.darkTheme ? 'var(--darker)' : 'var(--lighter)')};
  background-color: ${props =>
    props.darkTheme ? 'var(--light-bg)' : 'var(--dark-bg)'};
`

const HamburgerIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  position: absolute;
  left: -75px;
  top: 0;
  padding: 20px;
  color: ${props => (props.darkTheme ? 'var(--lighter)' : 'var(--darker)')};
  background-color: ${props =>
    props.darkTheme ? 'var(--dark-bg)' : 'var(--light-bg)'};

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: var(--light);
    margin: 6px 0;
    transition: 0.4s;
  }
`
const NavMenu = styled.nav`
  position: fixed;
  right: -135px;
  top: 0;
  z-index: 2;
  transition: all 0.5s;

  &.on {
    right: 0;

    .bar1 {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    }

    .bar2 {
      opacity: 0;
    }

    .bar3 {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }
  }

  ul {
    background-color: var(--primary-color);
    margin: 0;
    padding: 0;
    width: 135px;
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }

  ul li {
    display: flex;
    justify-content: space-between;
  }

  ul li a {
    text-decoration: none;
    padding: 15px 20px;
    color: white;
    transition: all 0.2s;
  }

  @media (min-width: 600px) {
    ul li.mobile {
      display: none;
    }
  }
`

const Avatar = styled.div`
  height: 80px;
  width: 80px;
  background: transparent url("${props => props.profileImage}") center center;
  background-size: cover;
  border-radius: 40px;
  margin: 15px 20px;
  `

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOn: 'off',
    }
  }

  menuToggle = () => {
    const toggleState = this.state.menuOn === 'off' ? 'on' : 'off'
    this.setState({ menuOn: toggleState })
  }

  menuToggleWithTheme = () => {
    this.menuToggle()
    this.props.darkThemeOnOff()
  }

  render() {
    const { profileImage } = this.props

    return (
      <NavMenu className={this.state.menuOn}>
        <HamburgerIcon
          onClick={this.menuToggle}
          darkTheme={this.props.darkTheme}
        >
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </HamburgerIcon>
        <ul>
          <li>
            <Avatar profileImage={profileImage} />
          </li>
          <li className="mobile">
            <a onClick={this.menuToggle} href="#profile">
              Profile
            </a>
          </li>
          <li className="mobile">
            <a onClick={this.menuToggle} href="#summary">
              Summary
            </a>
          </li>
          <li className="mobile">
            <a onClick={this.menuToggle} href="#experience">
              Experience
            </a>
          </li>
          <li className="mobile">
            <a onClick={this.menuToggle} href="#education">
              Education
            </a>
          </li>
          <li className="mobile">
            <a onClick={this.menuToggle} href="#skills">
              Skills
            </a>
          </li>
          <li className="mobile">
            <a onClick={this.menuToggle} href="#interests">
              Interests
            </a>
          </li>
        </ul>
        <ThemeSwitcher
          onClick={this.menuToggleWithTheme}
          darkTheme={this.props.darkTheme}
        >
          {this.props.darkTheme ? 'Light mode' : 'Dark mode'}
        </ThemeSwitcher>
      </NavMenu>
    )
  }
}

export default Nav
