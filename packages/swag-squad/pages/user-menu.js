import React from 'react'
import { styled } from '@stitches/react'
import { StyledDiv } from '@generates/swag'
import { HiOutlineLogout } from 'react-icons/hi'
import Page from '../components/app/Page.js'
import UserMenu from '../components/UserMenu.js'

const HeadingTwo = styled('h2')

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
          backgroundColor: '#171717',
          borderRadius: '.375em',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '512px',
          padding: '1em',
          height: '20em'
        }}
      >
        <UserMenu
          avatar="/img/avatar.jpeg"
          css={{}}
        >
          <StyledDiv css={{ display: 'grid', gap: '4' }}>
            <div>

              <HiOutlineLogout />

              Sign Out

            </div>
            <div>

              <HiOutlineLogout />

              Sign Out

            </div>
            <div>

              <HiOutlineLogout />

              Sign Out

            </div>
          </StyledDiv>
        </UserMenu>
      </StyledDiv>

    </Page>
  )
}
