import React from 'react'
import { css } from '@stitches/react'
import { StyledContainer } from '@generates/swag'
import Uploader from '../components/Uploader.js'

export default function HomePage () {
  return (
    <StyledContainer className={css({ fontFamily: 'sans-serif' })()}>

      <h1>
        swag-sheet
      </h1>

      <div>
        <Uploader
          onContinue={data => console.log(data)}
          onUpdateCell={(ctx, value) => {
            ctx.setCss({ backgroundColor: '#FEE2E2' })
            alert(value)
          }}
        />
      </div>

    </StyledContainer>
  )
}
