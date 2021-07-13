import React from 'react'
import { css } from '@stitches/react'
import { StyledContainer, TextField } from '@generates/swag'
import Uploader from '../components/Uploader.js'

export default function FiltersPage () {
  return (
    <StyledContainer className={css({ fontFamily: 'sans-serif' })()}>

      <h1>
        swag-sheet
      </h1>

      <div>
        <Uploader
          onContinue={data => alert(JSON.stringify(data, undefined, 2))}
          onCellUpdate={(ctx, value) => alert(value)}
          columns={columns => columns.map(col => ({
            ...col,
            disableSortBy: false,
            disableFilters: false,
            Filter: function Filter ({ column, gotoPage }) {
              return <TextField
                id={col.id}
                small
                onChange={evt => {
                  // Set to undefined to remove the filter entirely.
                  column.setFilter(evt.target.value || undefined)
                }}
              />
            }
          }))}
          onFilter={filters => console.log('Filters', filters)}
        />
      </div>

    </StyledContainer>
  )
}
