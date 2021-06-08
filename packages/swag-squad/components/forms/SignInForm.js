import React from 'react'
import { useForm } from 'react-hook-form'
import {
  EmailField,
  PasswordField,
  // SwitchField,
  LoadingButton,
  StyledDiv,
  StyledLink
} from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function SignInForm (props) {
  // const { showRememberMe = true } = props
  const { register, handleSubmit } = useForm()

  return (
    <StyledForm onSubmit={handleSubmit(props.onSubmit)}>

      <EmailField
        css={props.css?.emailField}
        register={register}
        required
      />

      <PasswordField
        css={props.css?.passwordField}
        register={register}
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
        <LoadingButton isLoading={props.isLoading} primary type="submit">
          Sign In
        </LoadingButton>
      </div>

    </StyledForm>
  )
}
