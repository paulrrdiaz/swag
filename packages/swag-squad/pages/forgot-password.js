import React from 'react'
import { styled } from '@stitches/react'
import { useForm } from 'react-hook-form'
import Page from '../components/app/Page.js'
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm.js'

const HeadingTwo = styled('h2')

export default function ForgotPasswordPage () {
  const form = useForm()

  function submitForgotPassword () {

  }

  return (
    <Page>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        Forgot password
      </HeadingTwo>

      <br />

      <ForgotPasswordForm form={form} onSubmit={submitForgotPassword} />

    </Page>
  )
}
