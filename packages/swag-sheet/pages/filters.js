import React from 'react'
import Fakerator from 'fakerator'
import { css } from '@stitches/react'
import { StyledContainer, Button, TextField } from '@generates/swag'
import useQueryParams from '@generates/use-query-params'
import Spreadsheet from '../components/Spreadsheet.js'

const initialData = [
  {
    'Driver Name': 'Tom Deluge',
    'Plate Number': 'AX9 920',
    'Make and Model': 'Subaru Forrester'
  },
  {
    'Driver Name': 'Denise Rich',
    'Plate Number': 'GR8 LOL',
    'Make and Model': 'Honda Civic'
  },
  {
    'Driver Name': 'Lenny Jones',
    'Plate Number': 'TTR 302',
    'Make and Model': 'Ford F150'
  }
]

const faker = Fakerator()

function toFilter (filter) {
  const [id, value] = filter?.split(':')
  return { id, value }
}
function toFilterString (filter) {
  return `${filter.id}:${filter.value}`
}

export default function FiltersPage () {
  const renderRef = React.useRef(0)
  const [isLoading, setIsLoading] = React.useState(false)
  const [data, setData] = React.useState(initialData)
  const [
    filters,
    setFilters
  ] = useQueryParams('filter', [], f => f?.map(toFilter))
  const initialState = React.useRef()

  const onPageIndex = React.useCallback(
    pageIndex => console.log('Page index', pageIndex),
    []
  )
  const onSortBy = React.useCallback(
    sortBy => console.log('Sort by', sortBy),
    []
  )

  function updateData () {
    setIsLoading(true)
    setTimeout(
      () => {
        setData(data.map(d => ({ ...d, 'Driver Name': faker.names.name() })))
        setIsLoading(false)
      },
      2000
    )
  }

  //
  React.useEffect(
    () => {
      if (!initialState.current) initialState.current = { filters }
    },
    [filters]
  )

  React.useEffect(() => (renderRef.current = renderRef.current + 1), [])

  return (
    <StyledContainer className={css({ fontFamily: 'sans-serif' })()}>

      <h1>
        swag-sheet
      </h1>

      <div className={css('div', { marginTop: '2em' })()}>
        <Button primary onClick={updateData}>
          Update Data
        </Button>
      </div>

      <div>
        {initialState.current && <Spreadsheet
          columns={columns => columns.map(col => ({
            ...col,
            disableSortBy: false,
            disableFilters: false,
            Filter: function TextFilter ({ column }) {
              return <TextField
                id={col.id}
                value={column.filterValue || ''}
                small
                onChange={evt => {
                  // Set to undefined to remove the filter entirely.
                  column.setFilter(evt.target.value || undefined)
                }}
              />
            }
          }))}
          onPageIndex={onPageIndex}
          onSortBy={onSortBy}
          data={data}
          initialState={initialState.current}
          showLoading={true}
          isLoading={isLoading}
          onFilter={filters => {
            if (renderRef.current > 0) {
              initialState.current = { filters }
              setFilters(filters.map(toFilterString), { update: false })
            }
          }}
        />}
      </div>

    </StyledContainer>
  )
}
