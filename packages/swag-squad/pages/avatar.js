import React from 'react'
import { styled } from '@stitches/react'
import { StyledDiv } from '@generates/swag'
import Page from '../components/app/Page.js'
import Avatar from '../components/Avatar.js'

const HeadingTwo = styled('h2')

export default function AvatarPage () {
  return (
    <Page>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        Avatar
      </HeadingTwo>

      <br />

      <StyledDiv css={{ marginTop: '1em' }}>
        <Avatar name="Rick Flick" />
      </StyledDiv>

      <StyledDiv css={{ marginTop: '1em' }}>
        <Avatar image="/img/avatar.jpeg" name="Dirk Lurk" />
      </StyledDiv>

    </Page>
  )
}
