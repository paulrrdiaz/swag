import React from 'react'
import { merge } from '@generates/merger'
import { styled, keyframes } from '@stitches/react'
import transition from '../styles/transition.js'

const Wrapper = styled(
  'div',
  {
    position: 'relative',
    overflow: 'hidden',
    height: 'auto',
    padding: '.25em',
    borderRadius: '.375em',
    // https://stackoverflow.com/a/58283449/894420
    transform: 'translateZ(0)'
  }
)
const Bar = styled(
  'div',
  {
    position: 'absolute',
    left: '-32px',
    right: '-32px',
    top: '0',
    bottom: '0',
    backgroundColor: '#F1F5F9',
    backgroundSize: '32px 32px',
    ...transition
  }
)

export default function LoadingBar (props) {
  const {
    animation = keyframes({
      from: { transform: 'translateX(-32px)' },
      to: { transform: 'translateX(32px)' }
    }),
    isEnabled = true,
    background = 'rgba(255, 255, 255, 0.375)',
    css,
    ...rest
  } = props

  const barCss = merge(
    {
      backgroundImage: `
        linear-gradient(
          45deg,
          ${background} 25%,
          transparent 25%,
          transparent 50%,
          ${background} 50%,
          ${background} 75%,
          transparent 75%,
          transparent
        )
      `
    },
    isEnabled
      ? {
          backgroundColor: '#3B82F6',
          animationName: animation,
          animationDuration: '.25s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite'
        }
      : {},
    css?.bar
  )

  return (
    <Wrapper {...rest} css={css?.wrapper}>
      <Bar css={barCss} />
    </Wrapper>
  )
}
