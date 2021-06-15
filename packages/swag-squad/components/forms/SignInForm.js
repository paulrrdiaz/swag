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
  const {
    // showRememberMe = true
    forgotPasswordLinkProps = { href: '/forgot-password' },
    forgotPasswordLink = (
      <StyledLink {...forgotPasswordLinkProps}>
        Forgot password?
      </StyledLink>
    )
  } = props
  const { register, handleSubmit } = useForm()

  return (
    <StyledForm onSubmit={handleSubmit(props.onSubmit)}>

      {props.header}

      <EmailField
        feedback={props.feedback?.email}
        css={props.css?.emailField}
        register={register}
        required
      />

      <PasswordField
        feedback={props.feedback?.password}
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
          {forgotPasswordLink}
        </StyledDiv>

      </StyledDiv>

      <div>
        <LoadingButton isLoading={props.isLoading} primary type="submit">
          Sign In
        </LoadingButton>
      </div>

      {props.footer}

    </StyledForm>
  )
}
