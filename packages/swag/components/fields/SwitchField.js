import React from 'react'
import StyledSpan from '../styled/StyledSpan.js'
import StyledDiv from '../styled/StyledDiv.js'
import StyledButton from '../styled/StyledButton.js'
import transition from '../../styles/transition.js'
import StyledLabel from '../styled/StyledLabel.js'

export default function SwitchField ({ id, children, ...props }) {
  const [state, setState] = React.useState()

  return (
    <div {...props}>

      <StyledDiv css={{ display: 'flex' }}>

        <StyledButton
          type="button"
          aria-pressed="false"
          onClick={() => setState(!state)}
          // className={clsx(
          //   switchOff,
          //   'my-2 mr-4',
          //   field.value ? 'bg-blue-600' : 'bg-gray-300'
          // )}
          css={{
            marginRight: '1em',
            // bg-gray-300 relative inline-flex flex-shrink-0 h-6 w-11 border-2
            // border-transparent rounded-full cursor-pointer transition duration-300
            // focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50
            // focus:border-blue-600
            backgroundColor: state ? '#22C55E' : '#D1D5DB',
            position: 'relative',
            display: 'inline-flex',
            flexShrink: '0',
            borderWidth: '2px',
            borderColor: 'transparent',
            borderRadius: '.5em',
            cursor: 'pointer',
            height: '1.25em',
            width: '2.75em',
            ...transition
          }}
        >
          {/* <span className="sr-only">Use setting</span> */}
          {/* <!-- Enabled: "", Not Enabled: "translate-x-0" --> */}
          <StyledSpan
            aria-hidden="true"
            // className={clsx(
            //   switchOn,
            //   field.value ? 'translate-x-5' : 'translate-x-0'
            // )}
            // pointer-events-none inline-block h-5 w-5 rounded-full bg-white
            // shadow transform ring-0 focus:border-blue-600 transition duration-300
            css={{
              transform: `translateX(${state ? '1.25em' : '0'}`,
              display: 'inline-block',
              backgroundColor: '#fff',
              borderRadius: '.5em',
              height: '1.25em',
              width: '1.25em',
              ...transition
            }}
          />
        </StyledButton>

        <StyledLabel
          onClick={() => setState(!state)}
          // className={clsx(formLabel, error && 'text-red-500')}
        >
          {children}
        </StyledLabel>

      </StyledDiv>

    </div>
  )
}
