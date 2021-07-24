import React from 'react'
import { styled } from '@stitches/react'
import { useForm } from 'react-hook-form'
import Page from '../components/app/Page.js'
import ResetPasswordForm from '../components/forms/ResetPasswordForm.js'

const HeadingTwo = styled('h2')

export default function ResetPasswordPage () {
  const form = useForm()

  function resetPassword () {

  }

  return (
    <Page>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        Reset password
      </HeadingTwo>

      <br />

      <ResetPasswordForm form={form} onSubmit={resetPassword} />

    </Page>
  )
}
