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

      <PasswordField
        css={props.css?.passwordfield}
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
        required
      />

      <div>
        <Button primary type="submit">
          Reset Password
        </Button>
      </div>

    </StyledForm>
  )
}
