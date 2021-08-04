import React from 'react'
import { merge } from '@generates/merger'
import Tippy from '@tippyjs/react'
import Button from './buttons/Button.js'
import StyledDiv from './styled/StyledDiv.js'

export default function Menu (props) {
  const [visible, setVisible] = React.useState(props.visible || false)
  const toggle = () => setVisible(!visible)

  let trigger
  if (typeof props.trigger === 'string') {
    trigger = (
      <Button css={props.css?.button} onClick={toggle}>
        {props.trigger}
      </Button>
    )
  } else if (typeof props.trigger === 'function') {
    trigger = props.trigger({ setVisible, toggle })
  }

  return (
    <Tippy
      placement="bottom"
      visible={visible}
      interactive={true}
      onClickOutside={() => setVisible(false)}
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
      {trigger}
    </Tippy>
  )
}
