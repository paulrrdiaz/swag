import React from 'react'
import { useForm } from 'react-hook-form'
import {
  EmailField,
  PasswordField,
  LoadingButton,
  TextField
} from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function AccountForm (props) {
  const { showName = true, showUsername = false } = props
  const { register, handleSubmit } = useForm({
    defaultValues: props.defaultValues
  })

  return (
    <StyledForm onSubmit={handleSubmit(props.onSubmit)}>

      {props.header}

      {showName && (
        <>

          <TextField
            id="firstName"
            label="First name"
            feedback={props.feedback?.firstName}
            css={props.css?.firstNameField}
            register={register}
            required
          />

          <TextField
            id="lastName"
            label="Last name"
            feedback={props.feedback?.lastName}
            css={props.css?.lastNameField}
            register={register}
            required
          />

        </>
      )}

      {showUsername && (
        <TextField
          id="username"
          label="Username"
          feedback={props.feedback?.username}
          css={props.css?.usernameField}
          register={register}
          required
        />
      )}

      <EmailField
        feedback={props.feedback?.email}
        css={props.css?.emailField}
        register={register}
        required
      />

      <PasswordField
        id="passwordConfirm"
        label="Confirm password"
        feedback={props.feedback?.passwordConfirm}
        css={props.css?.passwordfield}
        register={register}
        autocomplete="current-password"
        required
      />

      <div>
        <LoadingButton isLoading={props.isLoading} primary type="submit">
          Update Account
        </LoadingButton>
      </div>

      {props.footer}

    </StyledForm>
  )
}
