import React from 'react'
import { styled } from '@stitches/react'
import Page from '../components/app/Page.js'
import VerifyEmailForm from '../components/forms/VerifyEmailForm.js'

const HeadingTwo = styled('h2')

export default function VerifyEmailPage () {
  function verifyEmail () {

  }

  return (
    <Page>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        Verify email
      </HeadingTwo>

      <br />

      <VerifyEmailForm
        onSubmit={verifyEmail}
      />

    </Page>
  )
}
