import {
  EmailField,
  Passwordfield,
  SwitchField,
  Button,
  StyledDiv,
  StyledLink
} from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function LoginForm (props) {
  const { showRememberMe = true } = props

  return (
    <StyledForm onSubmit={props.onSubmit}>

      <EmailField
        css={props.css?.emailField}
        required
      />

      <Passwordfield
        css={props.css?.passwordfield}
        required
      />

      <StyledDiv css={{ display: 'flex', alignItems: 'center' }}>

        {showRememberMe && (
          <div>
            <SwitchField>
              Remember me
            </SwitchField>
          </div>
        )}

        <StyledDiv css={{ marginLeft: 'auto' }}>
          <StyledLink>
            Forgot password?
          </StyledLink>
        </StyledDiv>

      </StyledDiv>

      <div>
        <Button primary type="submit">
          Login
        </Button>
      </div>

    </StyledForm>
  )
}
