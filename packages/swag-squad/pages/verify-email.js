import React from 'react'
import { styled, global } from '@stitches/react'
import { useForm } from 'react-hook-form'
import Page from '../components/app/Page.js'
import VerifyEmailForm from '../components/forms/VerifyEmailForm.js'

const globalStyles = global({
  body: { backgroundColor: '#171717' }
})
const HeadingTwo = styled('h2')

export default function VerifyEmailPage () {
  const form = useForm()

  globalStyles()

  function verifyEmail () {

  }

  return (
    <Page css={{ color: '#F5F5F5' }}>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        Verify email
      </HeadingTwo>

      <br />

      <VerifyEmailForm form={form} onSubmit={verifyEmail} />

    </Page>
  )
}
