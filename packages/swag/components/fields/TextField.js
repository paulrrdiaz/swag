import React from 'react'
import StyledLabel from '../styled/StyledLabel.js'
import StyledInput from '../styled/StyledInput.js'

export default function TextField (props) {
  return (
    <div>

      {typeof props.label === 'string'
        ? (
            <StyledLabel htmlFor={props.id} css={props.styles?.label}>
              {props.label}
            </StyledLabel>
          )
        : props.label
      }

      {props.errorText && (
        <div>
          {props.errorText}
        </div>
      )}

      <StyledInput
        // {...props.register(props.id, props.required)}
        type={props.type || 'text'}
        id={props.id}
        required={props.required}
      />

    </div>
  )
}
