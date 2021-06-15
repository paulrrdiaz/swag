import React from 'react'
import { useForm } from 'react-hook-form'
import {
  EmailField,
  PasswordField,
  StyledLabel,
  LoadingButton,
  StyledSpan,
  TextField
} from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function ResetPasswordForm (props) {
  const { includeToken = true } = props
  const { register, handleSubmit } = useForm({
    defaultValues: props.defaultValues
  })

  return (
    <StyledForm onSubmit={handleSubmit(props.onSubmit)}>

      {props.header}

      <EmailField
        feedback={props.feedback?.email}
        css={props.css?.emailField}
        register={register}
        required
      />

      {includeToken && (
        <TextField
          id="token"
          label="Token"
          feedback={props.feedback?.token}
          css={props.css?.tokenField}
          register={register}
          required
        />
      )}

      <PasswordField
        feedback={props.feedback?.password}
        css={props.css?.passwordfield}
        register={register}
        required
      />

      <PasswordField
        id="passwordConfirm"
        label={
          <StyledLabel htmlFor="passwordConfirm">
            Password
            <StyledSpan css={{ marginLeft: '.5em', color: '#6B7280' }}>
              (confirm)
            </StyledSpan>
          </StyledLabel>
        }
        feedback={props.feedback?.passwordConfirm}
        css={props.css?.passwordConfirmField}
        register={register}
        required
      />

      <div>
        <LoadingButton isLoading={props.isLoading} primary type="submit">
          Reset Password
        </LoadingButton>
      </div>

      {props.footer}

    </StyledForm>
  )
}
