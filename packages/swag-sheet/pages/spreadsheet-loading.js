import React from 'react'
import { css } from '@stitches/react'
import { StyledContainer, Button } from '@generates/swag'
import Spreadsheet from '../components/Spreadsheet.js'

const data = [
  {
    'Driver Name': 'Tom',
    'Plate Number': 'AX9 920',
    'Make and Model': 'Subaru Forrester'
  },
  {
    'Driver Name': 'Denise',
    'Plate Number': 'GR8 LOL',
    'Make and Model': 'Honda Civic'
  },
  {
    'Driver Name': 'Lenny',
    'Plate Number': 'TTR 302',
    'Make and Model': 'Ford F150'
  }
]

export default function CustomColsPage () {
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <StyledContainer className={css({ fontFamily: 'sans-serif' })()}>

      <h1>
        swag-sheet
      </h1>

      <div className={css('div', { marginTop: '2em' })()}>
        <Button primary onClick={() => setIsLoading(!isLoading)}>
          Toggle Enabled
        </Button>
      </div>

      <div>
        <Spreadsheet data={data} showLoading={true} isLoading={isLoading} />
      </div>

    </StyledContainer>
  )
}
