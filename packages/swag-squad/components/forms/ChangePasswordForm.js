import React from 'react'
import { useForm } from 'react-hook-form'
import { PasswordField, LoadingButton } from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function ChangePasswordForm (props) {
  const { register, handleSubmit } = useForm()

  return (
    <StyledForm onSubmit={handleSubmit(props.onSubmit)}>

      {props.header}

      <PasswordField
        id="existingPassword"
        label="Existing password"
        css={props.css?.passwordfield}
        register={register}
        autocomplete="current-password"
        required
      />

      <PasswordField
        id="newPassword"
        label="New password"
        css={props.css?.newPasswordField}
        register={register}
        autocomplete="new-password"
        required
      />

      <div>
        <LoadingButton isLoading={props.isLoading} primary type="submit">
          Change Password
        </LoadingButton>
      </div>

      {props.footer}

    </StyledForm>
  )
}
