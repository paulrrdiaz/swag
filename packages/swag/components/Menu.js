import React from 'react'
import { merge } from '@generates/merger'
import { css } from '@stitches/react'
import { usePopper } from 'react-popper'
import Button from './buttons/Button.js'
import StyledDiv from './styled/StyledDiv.js'

export default function Menu (props) {
  const [referenceElement, setReferenceElement] = React.useState()
  const [popperElement, setPopperElement] = React.useState()
  const { styles, attributes } = usePopper(
    referenceElement,
    popperElement,
    { modifiers: [{ name: 'offset', options: { offset: [0, 10] } }] }
  )
  const popover = css(props.css?.popover)
  const panel = css(merge(
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
  ))

  return (
    <StyledDiv className={popover()}>
      {typeof props.trigger === 'string'
        ? (
            <Button
              ref={setReferenceElement}
              css={merge({ cursor: 'pointer' }, props.css?.button)}
            >
              {props.trigger}
            </Button>
          )
        : props.trigger
      }

      <StyledDiv
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        className={panel()}
      >
        {props.children}
      </StyledDiv>

    </StyledDiv>
  )
}
