import React from 'react'
import {
  EmailField,
  Button,
  TextField
} from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function VerifyEmailForm (props) {
  const { includeToken = true } = props
  return (
    <StyledForm onSubmit={props.onSubmit}>

      {props.header}

      <EmailField
        css={props.css?.emailField}
        required
      />

      {includeToken && (
        <TextField
          id="token"
          label="Token"
          css={props.css?.tokenField}
          required
        />
      )}

      {props.footer}

      <div>
        <Button primary type="submit">
          Verify Email
        </Button>
      </div>

    </StyledForm>
  )
}
