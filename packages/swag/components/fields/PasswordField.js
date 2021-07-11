import React from 'react'
import { merge } from '@generates/merger'
import StyledLabel from '../styled/StyledLabel.js'
import StyledInput from '../styled/StyledInput.js'
import StyledFieldWrapper from '../styled/StyledFieldWrapper.js'
import StyledButtonWrapper from '../styled/StyledButtonWrapper.js'
import Button from '../buttons/Button.js'
import Feedback from '../Feedback.js'

export default function PasswordField (props) {
  const {
    id = 'password',
    label = 'Password',
    feedbackId = `${props.id}-feedback`
  } = props
  const [isVisible, setIsVisible] = React.useState(!!props.isVisible)
  const input = merge(
    {
      paddingRight: '4em',
      ...props.feedback && {
        borderColor: '#DC2626',
        '&:focus': {
          borderColor: '#DC2626',
          boxShadow: '#FECACA 0px 0px 0px 3px'
        }
      }
    },
    props.css?.input
  )

  return (
    <div>

      <StyledLabel htmlFor={id} css={props.styles?.label}>
        {label}
      </StyledLabel>

      {props.feedback && <Feedback id={feedbackId} feedback={props.feedback} />}

      <StyledFieldWrapper>

        <StyledInput
          {...props.register && props.register(id, props.required)}
          type={isVisible ? 'text' : 'password'}
          id={id}
          required={props.required}
          css={input}
          level={props.feedback && 'error'}
        />

        <StyledButtonWrapper>
          <Button
            small
            onClick={evt => {
              evt.preventDefault()
              setIsVisible(!isVisible)
            }}
            primary={isVisible}
          >
            {isVisible ? 'Hide' : 'Show'}
          </Button>
        </StyledButtonWrapper>

      </StyledFieldWrapper>

    </div>
  )
}
