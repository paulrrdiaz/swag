import React from 'react'
import { merge } from '@generates/merger'
import StyledLabel from '../styled/StyledLabel.js'
import StyledInput from '../styled/StyledInput.js'
import StyledDiv from '../styled/StyledDiv.js'
import Feedback from '../Feedback.js'

export default function TextField (props) {
  const { feedbackId = `${props.id}-feedback` } = props

  const input = merge(
    {
      ...props.feedback && {
        borderColor: '#EF4444',
        '&:focus': {
          borderColor: '#EF4444',
          boxShadow: '#FECACA 0px 0px 0px 3px'
        }
      }
    },
    props.css?.input
  )

  return (
    <StyledDiv css={props.css?.wrapper}>

      {typeof props.label === 'string'
        ? (
            <StyledLabel htmlFor={props.id} css={props.css?.label}>
              {props.label}
            </StyledLabel>
          )
        : props.label
      }

      {props.feedback && <Feedback id={feedbackId} feedback={props.feedback} />}

      <StyledInput
        {...props.register && props.register(props.id, props.required)}
        type={props.type || 'text'}
        id={props.id}
        css={input}
        required={props.required}
        small={props.small}
        level={props.feedback && 'error'}
      />

    </StyledDiv>
  )
}
