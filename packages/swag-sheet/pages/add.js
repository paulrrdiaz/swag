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
  const [isLoading, setIsLoading] = React.useState(false)

  const onPageIndex = React.useCallback(
    pageIndex => console.log('Page index', pageIndex),
    []
  )
  const onSortBy = React.useCallback(
    sortBy => console.log('Sort by', sortBy),
    []
  )
  const onRowIsSelected = React.useCallback(
    rows => console.log('Selected row', rows),
    []
  )

  function onSaveAddedRows (input) {
    return new Promise(resolve => {
      setIsLoading(true)
      setTimeout(
        () => {
          console.log('Rows', input)
          data.push(input)
          setIsLoading(false)
          resolve()
        },
        1000
      )
    })
  }

  function onUpdateCell (ctx, value) {
    ctx.setCss({ backgroundColor: '#FEE2E2' })
  }

  return (
    <StyledContainer className={css({ fontFamily: 'sans-serif' })()}>

      <h1>
        swag-sheet
      </h1>

      <div>
        <Spreadsheet
          columns={[
            {
              id: 'Selection',
              Cell: function RowSelection ({ row }) {
                const { indeterminate, ...rest } = row.getToggleRowSelectedProps()
                return <input
                  type="checkbox"
                  className="form-checkbox"
                  {...rest}
                />
              },
              disableSortBy: false
            },
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
          onPageIndex={onPageIndex}
          onSortBy={onSortBy}
          onSaveAddedRows={onSaveAddedRows}
          onUpdateCell={onUpdateCell}
          onRowIsSelected={onRowIsSelected}
          data={data}
          showLoading={true}
          isLoading={isLoading}
        />
      </div>

    </StyledContainer>
  )
}
