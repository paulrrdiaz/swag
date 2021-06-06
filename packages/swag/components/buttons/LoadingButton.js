import React from 'react'
import { styled } from '@stitches/react'
import { merge } from '@generates/merger'
import Button from './Button.js'
import LoadingBar from '../LoadingBar.mjs'

const Wrapper = styled('div')

export default function LoadingButton (props) {
  const {
    isLoading = false,
    children,
    css,
    barBackground,
    ...rest
  } = props
  const ref = React.useRef()

  const barWrapper = merge(
    {
      height: ref.current?.getBoundingClientRect().height,
      width: `${ref.current?.getBoundingClientRect().width}px`,
      display: 'grid',
      alignItems: 'center'
    },
    css?.barWrapper
  )
  const bar = merge(
    { animationDuration: '.375s' },
    css?.bar
  )

  return (
    <Button {...rest} css={isLoading && { pointerEvents: 'none' }}>
      {isLoading && (
        <Wrapper css={barWrapper}>
          <LoadingBar css={{ bar }} background={barBackground} />
        </Wrapper>
      )}
      <Wrapper css={isLoading && { display: 'none' }} ref={ref}>
        {children}
      </Wrapper>
    </Button>
  )
}
