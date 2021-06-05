import React from 'react'
import { css } from '@stitches/react'
import LoadingButton from '../components/buttons/LoadingButton.js'
import StyledContainer from '../components/styled/StyledContainer.js'

export default function LoadingButtonPage () {
  const [isLoading, setIsLoading] = React.useState()

  function handleClick () {
    setIsLoading(true)
    setTimeout(
      () => setIsLoading(false),
      5000
    )
  }

  return (
    <StyledContainer>

      <h1>
        LoadingButton
      </h1>

      <div className={css({ display: 'flex', alignItems: 'center' })()}>

        <div className={css({ marginRight: '1em' })()}>
          <LoadingButton isLoading={isLoading} onClick={handleClick}>
            Click Here
          </LoadingButton>
        </div>

        <div>
          This is a loading button.
        </div>

      </div>

      <div className={css({ display: 'flex', alignItems: 'center', marginTop: '1em' })()}>

        <div className={css({ marginRight: '1em' })()}>
          <LoadingButton isLoading={isLoading} onClick={handleClick} primary>
            Click Here
          </LoadingButton>
        </div>

        <div>
          This is a primary loading button.
        </div>

      </div>

    </StyledContainer>
  )
}
