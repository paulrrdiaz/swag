import React from 'react'
import { EmailField, LoadingButton } from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function ForgotPasswordForm (props) {
  const { form } = props

  return (
    <StyledForm onSubmit={form.handleSubmit(props.onSubmit)}>

      {props.header}

      <EmailField
        feedback={props.feedback?.email}
        css={props.css?.emailField}
        register={form.register}
        required
      />

      <div>
        <LoadingButton isLoading={props.isLoading} primary type="submit">
          Submit
        </LoadingButton>
      </div>

      {props.footer}

    </StyledForm>
  )
}
