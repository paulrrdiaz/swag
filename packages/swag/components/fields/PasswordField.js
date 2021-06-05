import React from 'react'
import StyledLabel from '../styled/StyledLabel.js'
import StyledInput from '../styled/StyledInput.js'
import StyledFieldWrapper from '../styled/StyledFieldWrapper.js'
import StyledButtonWrapper from '../styled/StyledButtonWrapper.js'
import Button from '../buttons/Button.js'

export default function PasswordField (props) {
  const { id = 'password', label = 'Password' } = props
  const [isVisible, setIsVisible] = React.useState(!!props.isVisible)

  return (
    <div>

      <StyledLabel htmlFor={id} css={props.styles?.label}>
        {label}
      </StyledLabel>

      {props.errorText && (
        <div>
          {props.errorText}
        </div>
      )}

      <StyledFieldWrapper>

        <StyledInput
          {...props.register && props.register(id, props.required)}
          type={isVisible ? 'text' : 'password'}
          id={id}
          required={props.required}
          css={{ paddingRight: '4em' }}
        />

        <StyledButtonWrapper>
          <Button
            small
            onClick={evt => {
              evt.preventDefault()
              setIsVisible(!isVisible)
            }}
          >
            {isVisible ? 'Hide' : 'Show'}
          </Button>
        </StyledButtonWrapper>

      </StyledFieldWrapper>

    </div>
  )
}
