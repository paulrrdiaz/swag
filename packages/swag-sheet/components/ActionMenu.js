import React from 'react'
import { styled } from '@stitches/react'
import { Button } from '@generates/swag'

const Wrapper = styled('div', { display: 'flex', alignItems: 'center' })

export default function ActionMenu (props) {
  const { css, onClear = () => {}, onContinue = () => {}, ...rest } = props

  return (
    <Wrapper {...rest} css={css?.wrapper}>

      <Button stop onClick={onClear} css={css?.clearButton}>
        Clear
      </Button>

      <Button
        continue
        onClick={onContinue}
        css={{ marginLeft: '1em', ...css?.continueButton }}
      >
        Continue
      </Button>

    </Wrapper>
  )
}
