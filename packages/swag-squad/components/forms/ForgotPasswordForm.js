import React from 'react'
import { useForm } from 'react-hook-form'
import {
  EmailField,
  Button
} from '@generates/swag'
import StyledForm from '../styled/StyledForm.js'

export default function ForgotPasswordForm (props) {
  const { register, handleSubmit } = useForm()
  
  return (
    <StyledForm onSubmit={handleSubmit(props.onSubmit)}>

      {props.header}

      <EmailField
        css={props.css?.emailField}
        register={register}
        required
      />

      <div>
        <Button primary type="submit">
          Submit
        </Button>
      </div>
      
      {props.footer}

    </StyledForm>
  )
}
