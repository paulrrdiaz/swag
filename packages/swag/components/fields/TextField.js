import React from 'react'
import { merge } from '@generates/merger'
import StyledLabel from '../styled/StyledLabel.js'
import StyledInput from '../styled/StyledInput.js'
import StyledDiv from '../styled/StyledDiv.js'

export default function TextField (props) {
  const input = merge(
    {
      ...props.feedback && {
        borderColor: '#EF4444',
        '&:focus': {
          borderColor: '#EF4444',
          boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, #FECACA 0px 0px 0px 3px'
        }
      }
    },
    props.css?.input
  )

  return (
    <div>

      {typeof props.label === 'string'
        ? (
            <StyledLabel htmlFor={props.id} css={props.css?.label}>
              {props.label}
            </StyledLabel>
          )
        : props.label
      }

      {props.feedback && (
        <StyledDiv css={{
          color: '#EF4444',
          marginTop: '.5em',
          marginBottom: '.5em',
          fontSize: '.925em',
          fontWeight: '500'
        }}>
          {props.feedback}
        </StyledDiv>
      )}

      <StyledInput
        {...props.register && props.register(props.id, props.required)}
        type={props.type || 'text'}
        id={props.id}
        css={input}
        required={props.required}
      />

    </div>
  )
}
