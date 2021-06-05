import React from 'react'
import { css } from '@stitches/react'
import Button from '../components/buttons/Button.js'
import StyledContainer from '../components/styled/StyledContainer.js'

export default function ButtonPage () {
  const [isHidden, setIsHidden] = React.useState(true)

  return (
    <StyledContainer>

      <h1>
        Button
      </h1>

      <div className={css({ display: 'flex', alignItems: 'center', marginTop: '1em' })()}>

        <div className={css({ marginRight: '1em' })()}>
          <Button primary>
            Get Started
          </Button>
        </div>

        <div>
          This is the <code>primary</code> variant.
        </div>

      </div>

      <div className={css({ display: 'flex', alignItems: 'center', marginTop: '1em' })()}>

        <div className={css({ marginRight: '1em' })()}>
          <Button secondary>
            Cancel Edits
          </Button>
        </div>

        <div>
          This is the <code>secondary</code> variant.
        </div>

      </div>

      <div className={css({ display: 'flex', alignItems: 'center', marginTop: '1em' })()}>

        <div className={css({ marginRight: '1em' })()}>
          <Button continue>
            Continue
          </Button>
        </div>

        <div>
          This is the <code>continue</code> variant.
        </div>

      </div>

      <div className={css({ display: 'flex', alignItems: 'center', marginTop: '1em' })()}>

        <div className={css({ marginRight: '1em' })()}>
          <Button stop>
            Delete Account
          </Button>
        </div>

        <div>
          This is the <code>stop</code> variant.
        </div>

      </div>

      <div className={css({ display: 'flex', alignItems: 'center', marginTop: '1em' })()}>

        <div className={css({ marginRight: '1em' })()}>
          <Button small secondary onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? 'Show' : 'Hide'}
          </Button>
        </div>

        <div>
          This is the <code>small secondary</code> variant.
        </div>

      </div>

    </StyledContainer>
  )
}
