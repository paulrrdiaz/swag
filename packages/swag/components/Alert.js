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
    paddingTop: '.25em',
    paddingBottom: '.25em',
    paddingLeft: '.5em',
    paddingRight: '.5em',
    borderRadius: '.375em',
    fontSize: '1.125em',
    lineHeight: '1.5em',
    ...props.level === 'success' && {
      backgroundColor: '#D1FAE5',
      color: '#064E3B',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#10B981'
    },
    ...props.level === 'error' && {
      backgroundColor: '#FEE2E2',
      color: '#881337',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#F43F5E'
    },
    ...props.level === 'info' && {
      backgroundColor: '#DBEAFE',
      color: '#1E3A8A',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#3B82F6'
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
              marginTop: '.2em',
              fontSize: '1.25em',
              textAlign: 'left',
              borderRadius: '.375em',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              ...props.level === 'success' && {
                color: '#064E3B',
                '&:hover': {
                  backgroundColor: '#A7F3D0'
                }
              },
              ...props.level === 'error' && {
                color: '#9F1239',
                '&:hover': {
                  backgroundColor: '#FECACA'
                }
              },
              ...props.level === 'info' && {
                color: '#1E40AF',
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
