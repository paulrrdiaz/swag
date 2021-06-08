import React from 'react'
import { styled } from '@stitches/react'
import Page from '../components/app/Page.js'
import SignUpForm from '../components/forms/SignUpForm.js'

const HeadingTwo = styled('h2')

export default function SignUpPage () {
  function signUp () {

  }

  return (
    <Page>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        Sign up
      </HeadingTwo>

      <br />

      <SignUpForm
        onSubmit={signUp}
      />

    </Page>
  )
}
