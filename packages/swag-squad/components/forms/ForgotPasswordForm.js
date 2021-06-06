import {
  EmailField,
  Button
} from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function ForgotPasswordForm (props) {
  return (
    <StyledForm onSubmit={props.onSubmit}>

      {props.header}

      <EmailField
        css={props.css?.emailField}
        required
      />

      <div>
        <Button primary type="submit">
          Submit
        </Button>
      </div>

    </StyledForm>
  )
}
