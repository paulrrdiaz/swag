import React, { useEffect } from 'react'
import { merge } from '@generates/merger'
import Button from './Button.js'
import StyledDiv from '../styled/StyledDiv.js'
import LoadingBar from '../LoadingBar.js'

export default function LoadingButton (props) {
  const {
    isLoading = false,
    children,
    css,
    barBackground,
    ...rest
  } = props
  const ref = React.useRef()
  const [dimensions, setDimensions] = React.useState()

  // Save the content dimensions before the loading bar is rendered.
  if (!dimensions) {
    const { height, width } = ref.current?.getBoundingClientRect() || {}
    if (width) setDimensions({ height, width })
  }

  // If the content changes, clear the old dimensions so it can be recalculated.
  useEffect(
    () => setDimensions(),
    [children]
  )

  const button = merge(
    { ...isLoading && { pointerEvents: 'none' } },
    css?.button
  )
  const barWrapper = merge(
    {
      ...dimensions?.height && { height: `${dimensions.height}px` },
      ...dimensions?.width && { width: `${dimensions.width}px` },
      display: 'grid',
      alignItems: 'center'
    },
    css?.barWrapper
  )
  const bar = merge({ animationDuration: '.375s' }, css?.bar)

  return (
    <Button {...rest} css={button}>
      {isLoading
        ? (
            <StyledDiv css={barWrapper}>
              <LoadingBar css={{ bar }} background={barBackground} />
            </StyledDiv>
          )
        : (
            <StyledDiv ref={ref}>
              {children}
            </StyledDiv>
          )
      }
    </Button>
  )
}
