import React from 'react'
import { css, styled } from '@stitches/react'
import { StyledDiv } from '@generates/swag'
import {
  HiOutlineUserCircle,
  HiOutlineAdjustments,
  HiOutlineSupport,
  HiOutlineLogout
} from 'react-icons/hi'
import Page from '../components/app/Page.js'
import UserMenu from '../components/UserMenu.js'
import StyledUserMenuItem from '../components/styled/StyledUserMenuItem.js'

const HeadingTwo = styled('h2')
const navIcon = css({ marginRight: '.5em', fontSize: '1.25em' })()

function Nav () {
  return (
    <StyledDiv css={{ display: 'grid' }}>

      <StyledUserMenuItem>

        <HiOutlineUserCircle className={navIcon} />

        My Profile

      </StyledUserMenuItem>

      <StyledUserMenuItem>

        <HiOutlineAdjustments className={navIcon} />

        Account Settings

      </StyledUserMenuItem>

      <StyledUserMenuItem>

        <HiOutlineSupport className={navIcon} />

        Support

      </StyledUserMenuItem>

      <StyledUserMenuItem>

        <HiOutlineLogout className={navIcon} />

        Sign Out

      </StyledUserMenuItem>

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
          name="dink double"
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
          name="go yubari"
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
          name="po boy"
          avatar="/img/avatar.jpeg"
          css={{ popover: { marginLeft: 'auto', marginRight: 'auto' } }}
        >
          <Nav />
        </UserMenu>
      </StyledDiv>

    </Page>
  )
}
