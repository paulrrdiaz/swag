import React from 'react'
import { EmailField, LoadingButton, TextField } from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function VerifyEmailForm (props) {
  const { includeToken = true, form } = props

  return (
    <StyledForm onSubmit={form.handleSubmit(props.onSubmit)}>

      {props.header}

      <EmailField
        feedback={props.feedback?.email}
        css={props.css?.emailField}
        register={form.register}
        required
      />

      {includeToken && (
        <TextField
          id="token"
          label="Token"
          feedback={props.feedback?.token}
          css={props.css?.tokenField}
          register={form.register}
          required
        />
      )}

      <div>
        <LoadingButton isLoading={props.isLoading} primary type="submit">
          Verify Email
        </LoadingButton>
      </div>

      {props.footer}

    </StyledForm>
  )
}
