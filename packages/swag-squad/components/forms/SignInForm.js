import React from 'react'
import {
  EmailField,
  PasswordField,
  // SwitchField,
  Button,
  StyledDiv,
  StyledLink
} from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function SignInForm (props) {
  // const { showRememberMe = true } = props

  return (
    <StyledForm onSubmit={props.onSubmit}>

      <EmailField
        css={props.css?.emailField}
        required
      />

      <PasswordField
        css={props.css?.passwordField}
        required
      />

      <StyledDiv css={{ display: 'flex', alignItems: 'center' }}>

        {/* {showRememberMe && (
          <div>
            <SwitchField>
              Remember me
            </SwitchField>
          </div>
        )} */}

        <StyledDiv css={{ marginLeft: 'auto' }}>
          <StyledLink>
            Forgot password?
          </StyledLink>
        </StyledDiv>

      </StyledDiv>

      <div>
        <Button primary type="submit">
          Sign In
        </Button>
      </div>

    </StyledForm>
  )
}
