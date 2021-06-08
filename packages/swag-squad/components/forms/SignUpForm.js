import React from 'react'
import {
  EmailField,
  PasswordField,
  Button,
  TextField
} from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function SignUpForm (props) {
  const { showName = true } = props

  return (
    <StyledForm onSubmit={props.onSubmit}>

      {props.header}

      {showName && (
        <>

          <TextField
            id="firstName"
            label="First name"
            css={props.css?.firstNameField}
            required
          />

          <TextField
            id="lastName"
            label="Last name"
            css={props.css?.lastNameField}
            required
          />

        </>
      )}

      <EmailField
        css={props.css?.emailField}
        required
      />

      <PasswordField
        css={props.css?.passwordfield}
        required
      />

      <div>
        <Button primary type="submit">
          Sign Up
        </Button>
      </div>

    </StyledForm>
  )
}
