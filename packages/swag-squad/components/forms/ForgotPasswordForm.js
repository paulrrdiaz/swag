import React from 'react'
import { useForm } from 'react-hook-form'
import { EmailField, LoadingButton } from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function ForgotPasswordForm (props) {
  const { register, handleSubmit } = useForm()

  return (
    <StyledForm onSubmit={handleSubmit(props.onSubmit)}>

      {props.header}

      <EmailField
        feedback={props.feedback?.email}
        css={props.css?.emailField}
        register={register}
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
