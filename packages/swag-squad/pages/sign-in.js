import React from 'react'
import { styled } from '@stitches/react'
import Page from '../components/app/Page.js'
import SignInForm from '../components/forms/SignInForm.js'

const HeadingTwo = styled('h2')

export default function SignInPage () {
  function signIn () {

  }

  return (
    <Page>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        Sign in
      </HeadingTwo>

      <br />

      <SignInForm onSubmit={signIn} />

    </Page>
  )
}
