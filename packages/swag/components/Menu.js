import React from 'react'
import { merge } from '@generates/merger'
import Tippy from '@tippyjs/react'
import Button from './buttons/Button.js'
import StyledDiv from './styled/StyledDiv.js'

export default function Menu (props) {
  return (
    <Tippy
      placement="bottom"
      trigger="click"
      content={
        <StyledDiv
          css={merge(
            {
              zIndex: 10,
              overflow: 'hidden',
              backgroundColor: '#FAFAFA',
              borderRadius: '.375em',
              width: '192px',
              boxShadow: `
                0 10px 15px -3px rgba(0,0,0,0.1),
                0 4px 6px -2px rgba(0,0,0,0.05)
              `
            },
            props.css?.panel
          )}
        >
          {props.children}
        </StyledDiv>
      }
    >
      {typeof props.trigger === 'string'
        ? (
            <Button css={props.css?.button}>
              {props.trigger}
            </Button>
          )
        : props.trigger
      }
    </Tippy>
  )
}
