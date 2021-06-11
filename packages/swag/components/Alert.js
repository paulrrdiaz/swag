import React from 'react'
import { HiX } from 'react-icons/hi'
import StyledDiv from './styled/StyledDiv.js'
import StyledButton from './styled/StyledButton.js'
import transition from '../styles/transition.js'

const scrollOptions = { behavior: 'smooth', block: 'end', inline: 'nearest' }

export default function Alert (props) {
  const ref = React.useRef()
  const css = {
    display: 'flex',
    padding: '.5em',
    borderRadius: '.375em',
    ...props.level === 'success' && {
      backgroundColor: '#D1FAE5',
      color: '#047857',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#34D399'
    },
    ...props.level === 'error' && {
      backgroundColor: '#FFE4E6',
      color: '#BE123C',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#FB7185'
    },
    ...props.level === 'info' && {
      backgroundColor: '#DBEAFE',
      color: '#1D4ED8',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#60A5FA'
    },
    ...props.css
  }

  React.useEffect(
    () => props.shouldScrollTo && ref.current.scrollIntoView(scrollOptions),
    [props.shouldScrollTo]
  )

  return (
    <StyledDiv css={css} ref={ref}>

      <StyledDiv css={{ padding: '.5em' }}>
        {props.children}
      </StyledDiv>

      {props.onClose && (
        <StyledDiv css={{ marginLeft: 'auto' }}>
          <StyledButton
            type="button"
            css={{
              display: 'inline-flex',
              padding: '.25em',
              fontSize: '1.25em',
              borderRadius: '.375em',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              ...props.level === 'success' && {
                color: '#047857',
                '&:hover': {
                  backgroundColor: '#A7F3D0'
                }
              },
              ...props.level === 'error' && {
                color: '#BE123C',
                '&:hover': {
                  backgroundColor: '#FECDD3'
                }
              },
              ...props.level === 'info' && {
                color: '#1D4ED8',
                '&:hover': {
                  backgroundColor: '#BFDBFE'
                }
              },
              ...transition,
              '&:focus': {
                outline: 'none'
              }
            }}
            onClick={props.onClose}
          >
            <HiX aria-hidden="true" />
          </StyledButton>
        </StyledDiv>
      )}

    </StyledDiv>
  )
}
