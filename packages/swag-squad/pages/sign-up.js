import React from 'react'
import { styled } from '@stitches/react'
import { useForm } from 'react-hook-form'
import Page from '../components/app/Page.js'
import SignUpForm from '../components/forms/SignUpForm.js'

const HeadingTwo = styled('h2')

export default function SignUpPage () {
  const form = useForm()

  function signUp () {

  }

  return (
    <Page>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        Sign up
      </HeadingTwo>

      <br />

      <SignUpForm form={form} onSubmit={signUp} />

    </Page>
  )
}
