import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  list-style: none;
  padding: 5px;
  font-size: 1em;
  color: var(--light);
  text-decoration: none;
  display: block;
  &:hover {
    color: var(--primary-color);
  }
  @media (max-width: 600px) {
    display: block;
  }
`

const HeaderLink = ({ link }) => {
  if (link.startsWith('http')) {
    return (
      <Link href={link} target="_blank" rel="noopener">
        {link}
      </Link>
    )
  } else {
    return <Link href={`mailto: ${link}`}>{link}</Link>
  }
}

export default HeaderLink
