import {
  EmailField,
  Passwordfield
} from '@generates/pagoda'
import StyledForm from '../styled/StyledForm.js'

export default function LoginForm (props) {
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

    </StyledForm>
  )
}
