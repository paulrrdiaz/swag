import React from 'react'
import Link from 'next/link'
import { styled } from '@stitches/react'
import StyledLink from '../styled/StyledLink.js'

const Header = styled('header')
const Heading = styled('h1')

export default function AppHeader () {
  return (
    <Header css={{ textAlign: 'center' }}>

      <Link href="/">
        <StyledLink>
          <Heading css={{ fontSize: '1.5em', margin: '0' }}>
            swag
          </Heading>
        </StyledLink>
      </Link>

    </Header>
  )
}
