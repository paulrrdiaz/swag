import React from 'react'
import { css, styled } from '@stitches/react'
import { StyledDiv, transition } from '@generates/swag'
import {
  HiOutlineUserCircle,
  HiOutlineAdjustments,
  HiOutlineSupport,
  HiOutlineLogout
} from 'react-icons/hi'
import Page from '../components/app/Page.js'
import UserMenu from '../components/UserMenu.js'

const HeadingTwo = styled('h2')
const NavItem = styled(
  'div',
  {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '1em',
    paddingRight: '1em',
    paddingTop: '.75em',
    paddingBottom: '.75em',
    fontSize: '.825em',
    fontWeight: '500',
    color: '#4B5563',
    ...transition,
    '&:hover': {
      backgroundColor: '#E5E5E5',
      color: '#111827'
    }
  }
)
const navIcon = css({ marginRight: '.5em', fontSize: '1.25em' })

function Nav () {
  return (
    <StyledDiv css={{ display: 'grid', overflow: 'hidden' }}>

      <NavItem>

        <HiOutlineUserCircle className={navIcon()} />

        My Profile

      </NavItem>

      <NavItem>

        <HiOutlineAdjustments className={navIcon()} />

        Account Settings

      </NavItem>

      <NavItem>

        <HiOutlineSupport className={navIcon()} />

        Support

      </NavItem>

      <NavItem>

        <HiOutlineLogout className={navIcon()} />

        Sign Out

      </NavItem>

    </StyledDiv>
  )
}

export default function UserMenuPage () {
  return (
    <Page>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        User Menu
      </HeadingTwo>

      <br />

      <StyledDiv
        css={{
          display: 'flex',
          backgroundColor: '#171717',
          borderRadius: '.375em',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '256px',
          padding: '2em 5em 5em 5em',
          height: '10em'
        }}
      >
        <UserMenu
          avatar="/img/avatar.jpeg"
          css={{ popover: { marginLeft: 'auto', marginRight: 'auto' } }}
        >
          <Nav />
        </UserMenu>
      </StyledDiv>

      <StyledDiv
        css={{
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '256px',
          padding: '2em 5em 5em 5em',
          height: '10em'
        }}
      >
        <UserMenu
          css={{ popover: { marginLeft: 'auto', marginRight: 'auto' } }}
        >
          <Nav />
        </UserMenu>
      </StyledDiv>

      <StyledDiv
        css={{
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '256px',
          padding: '2em 5em 5em 5em',
          height: '10em'
        }}
      >
        <UserMenu
          avatar="/img/avatar.jpeg"
          css={{ popover: { marginLeft: 'auto', marginRight: 'auto' } }}
        >
          <Nav />
        </UserMenu>
      </StyledDiv>

    </Page>
  )
}
