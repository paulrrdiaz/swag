import React from 'react'
import { useForm } from 'react-hook-form'
import {
  EmailField,
  PasswordField,
  StyledLabel,
  Button,
  StyledSpan,
  TextField
} from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function ResetPasswordForm (props) {
  const { includeToken = true } = props
  const { register, handleSubmit } = useForm()

  return (
    <StyledForm onSubmit={handleSubmit(props.onSubmit)}>

      {props.header}

      <EmailField
        css={props.css?.emailField}
        register={register}
        required
      />

      {includeToken && (
        <TextField
          id="token"
          label="Token"
          css={props.css?.tokenField}
          register={register}
          required
        />
      )}

      <PasswordField
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
        css={props.css?.passwordConfirmField}
        register={register}
        required
      />

      <div>
        <Button primary type="submit">
          Reset Password
        </Button>
      </div>
      
      {props.footer}

    </StyledForm>
  )
}
