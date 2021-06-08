import React from 'react'
import { styled } from '@stitches/react'
import Page from '../components/app/Page.js'
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm.js'

const HeadingTwo = styled('h2')

export default function ForgotPasswordPage () {
  function submitForgotPassword () {

  }

  return (
    <Page>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        Forgot password
      </HeadingTwo>

      <br />

      <ForgotPasswordForm
        onSubmit={submitForgotPassword}
      />

    </Page>
  )
}
