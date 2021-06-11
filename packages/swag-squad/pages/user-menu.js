import React from 'react'
import { styled } from '@stitches/react'
import Page from '../components/app/Page.js'
import UserMenu from '../components/UserMenu.js'

const HeadingTwo = styled('h2')

export default function ResetPasswordPage () {
  return (
    <Page>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        User Menu
      </HeadingTwo>

      <br />

      <UserMenu avatar="/img/avatar.jpeg" />

    </Page>
  )
}
