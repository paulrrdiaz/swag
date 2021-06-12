import React from 'react'
import { merge } from '@generates/merger'
import { css } from '@stitches/react'
import {
  Popover
  // Transition
} from '@headlessui/react'
import { usePopper } from 'react-popper'
// import { transition } from '@generates/swag'
import Avatar from './Avatar.js'

export default function UserMenu (props) {
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
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: '#E5E5E5',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)'
          },
          props.css?.panel
        ))
        const button = css(merge(
          {
            padding: '0',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: '#E5E5E5',
            borderRadius: '100%',
            cursor: 'pointer'
            // ...transition
          },
          props.css?.button,
          open && { boxShadow: '#CBD5E1 0px 0px 8px 2px' },
          open && props.css?.openButton
        ))

        return (
          <>

            <Popover.Button ref={setReferenceElement} className={button()}>
              <Avatar image={props.avatar} name={props.name} />
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
