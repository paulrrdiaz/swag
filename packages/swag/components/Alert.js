import React from 'react'
import { HiX } from 'react-icons/hi'
import StyledDiv from './styled/StyledDiv.js'
import StyledButton from './styled/StyledButton.js'
import transition from '../styles/transition.js'

export default function Alert (props) {
  const givenIsDisplayed = props.isDisplayed === undefined
    ? true
    : props.isDisplayed
  const [isDisplayed, setIsDisplayed] = React.useState(givenIsDisplayed)

  const css = {
    display: 'flex',
    alignItems: 'center',
    padding: '.5em',
    borderRadius: '.375em',
    ...props.level === 'success' && {
      backgroundColor: '#DCFCE7',
      color: '#15803D',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#4ADE80'
    },
    ...props.css
  }

  return isDisplayed && (
    <StyledDiv css={css}>

      <StyledDiv css={{ padding: '.5em' }}>
        {props.children}
      </StyledDiv>

      {props.canClose && (
        <StyledDiv css={{ marginLeft: 'auto', marginRight: '.25em' }}>
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
                color: '#15803D'
              },
              ...transition,
              '&:hover': {
                backgroundColor: '#BBF7D0'
              },
              '&:focus': {
                outline: 'none'
              }
            }}
            onClick={() => setIsDisplayed(false)}
          >
            <HiX aria-hidden="true" />
          </StyledButton>
        </StyledDiv>
      )}

    </StyledDiv>
  )
}
