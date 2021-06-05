import React from 'react'
import { styled } from '@stitches/react'
import ClearLink from './ClearLink.js'
import ContinueButton from './ContinueButton.js'

const Wrapper = styled('div', { display: 'flex', alignItems: 'center' })

export default function ActionMenu (props) {
  const { css, onClear = () => {}, onContinue = () => {}, ...rest } = props

  return (
    <Wrapper {...rest} css={css?.wrapper}>

      <ClearLink onClick={onClear} css={css?.clearLink}>
        Clear
      </ClearLink>

      <ContinueButton
        onClick={onContinue}
        css={css?.continueButton}
      >
        Continue
      </ContinueButton>

    </Wrapper>
  )
}
