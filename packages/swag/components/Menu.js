import React from 'react'
import { merge } from '@generates/merger'
import { css } from '@stitches/react'
import {
  Popover
  // Transition
} from '@headlessui/react'
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
  // const noOpacity = css({ opacity: '0' })()
  // const fullOpacity = css({ opacity: '0' })()

  return (
    <Popover className={popover()}>
      {({ open }) => {
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
          <>

            <Popover.Button
              as={props.trigger === 'string' ? Button : StyledDiv}
              ref={setReferenceElement}
              css={merge({ cursor: 'pointer' }, props.css?.button)}
              {...props.button}
            >
              {props.trigger}
            </Popover.Button>

            {/* NOTE: Panel transition not working properly. */}
            {/* <Transition
              enter={css(transition)().className}
              enterFrom={noOpacity.className}
              enterTo={fullOpacity.className}
              leaveFrom={fullOpacity.className}
              leaveTo={noOpacity.className}
            > */}
              <Popover.Panel
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
                className={panel()}
              >
                {props.children}
              </Popover.Panel>
            {/* </Transition> */}

          </>
        )
      }}
    </Popover>
  )
}

Menu.Button = Popover.Button
