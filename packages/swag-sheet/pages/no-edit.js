import React from 'react'
import { css } from '@stitches/react'
import { StyledContainer } from '@generates/swag'
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

export default function AddPage () {
  const onPageIndex = React.useCallback(
    pageIndex => console.log('Page index', pageIndex),
    []
  )
  const onSortBy = React.useCallback(
    sortBy => console.log('Sort by', sortBy),
    []
  )

  return (
    <StyledContainer className={css({ fontFamily: 'sans-serif' })()}>

      <h1>
        swag-sheet
      </h1>

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
          canEdit={false}
          onPageIndex={onPageIndex}
          onSortBy={onSortBy}
          data={data}
          showLoading={true}
        />
      </div>

    </StyledContainer>
  )
}
