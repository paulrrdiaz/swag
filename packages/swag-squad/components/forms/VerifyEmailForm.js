import React from 'react'
import { useForm } from 'react-hook-form'
import {
  EmailField,
  Button,
  TextField
} from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function VerifyEmailForm (props) {
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

      {props.footer}

      <div>
        <Button primary type="submit">
          Verify Email
        </Button>
      </div>
      
      {props.footer}

    </StyledForm>
  )
}
