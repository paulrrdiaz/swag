import React from 'react'
import { useForm } from 'react-hook-form'
import {
  EmailField,
  PasswordField,
  LoadingButton,
  TextField
} from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function SignUpForm (props) {
  const { showName = true } = props
  const { register, handleSubmit } = useForm()

  return (
    <StyledForm onSubmit={handleSubmit(props.onSubmit)}>

      {props.header}

      {showName && (
        <>

          <TextField
            id="firstName"
            label="First name"
            css={props.css?.firstNameField}
            register={register}
            required
          />

          <TextField
            id="lastName"
            label="Last name"
            css={props.css?.lastNameField}
            register={register}
            required
          />

        </>
      )}

      <EmailField
        css={props.css?.emailField}
        register={register}
        required
      />

      <PasswordField
        css={props.css?.passwordfield}
        register={register}
        required
      />

      <div>
        <LoadingButton isLoading={props.isLoading} primary type="submit">
          Sign Up
        </LoadingButton>
      </div>

      {props.footer}

    </StyledForm>
  )
}
