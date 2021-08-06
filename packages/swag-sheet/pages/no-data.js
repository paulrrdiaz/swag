import React from 'react'
import { css } from '@stitches/react'
import { StyledContainer } from '@generates/swag'
import Spreadsheet from '../components/Spreadsheet.js'

export default function NoDataPage () {
  return (
    <StyledContainer className={css({ fontFamily: 'sans-serif' })()}>

      <h1>
        swag-sheet
      </h1>

      <br />

      <div>
        <Spreadsheet
          columns={[
            {
              id: 'Driver Name',
              disableSortBy: false
            },
            {
              id: 'Plate Number',
              disableSortBy: false
            },
            {
              id: 'Make and Model',
              disableSortBy: false
            }
          ]}
          isLoading={false}
          showLoading={true}
          css={{ table: { width: '100%' } }}
        />
      </div>

    </StyledContainer>
  )
}
