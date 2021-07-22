import React from 'react'
import { styled } from '@stitches/react'
import { useTable, useFilters, useSortBy, usePagination } from 'react-table'
import { LoadingBar, Button } from '@generates/swag'
import { merge } from '@generates/merger'
import StyledTable from './styled/StyledTable.js'
import StyledTableHeader from './styled/StyledTableHeader.js'
import SpreadsheetCell from './SpreadsheetCell.js'

const Wrapper = styled('div', { overflowX: 'scroll' })
const StyledTr = styled('tr')

export const toCol = header => ({
  id: header,
  accessor: header,
  Header: header,
  disableSortBy: true,
  disableFilters: true
})

export const toStandardCol = col => merge(
  toCol(col.id),
  { disableFilters: !col.Filter },
  col
)

export default function Spreadsheet (props) {
  const initialRender = React.useRef(true)
  const [data, setData] = React.useState(props.data || [])
  const [firstRow] = data
  const columns = React.useMemo(
    () => {
      if (typeof props.columns === 'function') {
        return props.columns(Object.keys(firstRow || {}).map(toCol))
      } else if (props.columns) {
        return props.columns.map(toStandardCol)
      }
      return Object.keys(firstRow || {}).map(toCol)
    },
    [
      props,
      firstRow
    ]
  )
  const memoizedData = React.useMemo(() => data, [data])

  function onCellUpdate (ctx, value) {
    if (props.canEdit) {
      if (props.onCellUpdate) {
        props.onCellUpdate({ ...ctx, setData: props.setData }, value)
      } else if (props.setData) {
        props.setData(data)
      } else {
        props.data[ctx.cell.row.index][ctx.cell.column.id] = value
      }
    }
  }

  function addRow () {
    setData(data.concat({ 'Driver Name': 'Test' }))
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setAllFilters,
    state: { pageIndex, pageSize, sortBy, filters }
  } = useTable(
    merge(
      {
        columns,
        data: memoizedData,
        initialState: props.initialState
      },
      props.options
    ),
    useFilters,
    useSortBy,
    usePagination
  )

  const { onPageIndex, onPageSize, onSortBy, onFilter } = props

  React.useEffect(
    () => onPageIndex && !initialRender.current && onPageIndex(pageIndex),
    [
      onPageIndex,
      pageIndex
    ]
  )

  React.useEffect(
    () => onPageSize && !initialRender.current && onPageSize(pageSize),
    [
      onPageSize,
      pageSize
    ]
  )

  React.useEffect(
    () => onSortBy && !initialRender.current && onSortBy(sortBy),
    [
      onSortBy,
      sortBy
    ]
  )

  React.useEffect(
    () => onFilter && !initialRender.current && onFilter(filters),
    [
      onFilter,
      filters
    ]
  )

  React.useEffect(() => (initialRender.current = false), [])

  React.useEffect(
    () => props.filters && setAllFilters(props.filters),
    [
      setAllFilters,
      props.filters
    ]
  )

  return (
    <Wrapper css={props.css?.wrapper}>
      {props.data && (
        <StyledTable {...getTableProps()} css={props.css?.table}>
          <thead>
            {headerGroups.map(headerGroup => {
              const { key, ...rest } = headerGroup.getHeaderGroupProps()
              return (
                <StyledTr {...rest} key={key}>
                  {headerGroup.headers.map(column => {
                    const sortBy = column.getSortByToggleProps()
                    const { key, ...rest } = column.getHeaderProps(sortBy)
                    return (
                      <StyledTableHeader
                        key={key}
                        css={merge(
                          { verticalAlign: 'top' },
                          props.css?.tableHeader
                        )}
                      >

                        <div {...rest}>
                          {column.render('Header')}
                        </div>

                        {column.canFilter && column.render('Filter')}

                      </StyledTableHeader>
                    )
                  })}
                </StyledTr>
              )
            })}
          </thead>
          <tbody {...getTableBodyProps()}>

            {/* Loading Bar */}

            {props.showLoading && (
              <tr>
                <StyledTableHeader
                  as="td"
                  colSpan={columns.length}
                  css={{ backgroundColor: 'transparent' }}
                >
                  <LoadingBar
                    isEnabled={props.isLoading}
                    css={{
                      wrapper: { marginTop: '.5em', marginBottom: '.5em' }
                    }}
                  />
                </StyledTableHeader>
              </tr>
            )}

            {/* Data rows */}

            {rows.map((row, index) => {
              prepareRow(row)
              const { key, ...rest } = row.getRowProps()
              const rowId = row.values[props.rowIdKey] || key
              return (
                <StyledTr
                  key={key}
                  data-id={rowId}
                  css={{
                    backgroundColor: index % 2 === 0 ? '#fff' : '#FAFAFA'
                  }}
                  {...rest}
                >
                  {row.cells.map(cell => {
                    const { key, ...rest } = cell.getCellProps()
                    return (
                      <SpreadsheetCell
                        key={key}
                        cell={cell}
                        styles={props.css?.tableCell}
                        onCellUpdate={onCellUpdate}
                        canEdit={props.canEdit}
                        rowId={rowId}
                        {...rest}
                      />
                    )
                  })}
                </StyledTr>
              )
            })}

            {/* Action buttons */}

            {props.onAdd && (
              <tr>
                <StyledTableHeader
                  as="td"
                  colSpan={columns.length}
                  css={{ backgroundColor: 'transparent' }}
                >
                  <Button primary small onClick={addRow}>
                    Add
                  </Button>
                </StyledTableHeader>
              </tr>
            )}

          </tbody>
        </StyledTable>
      )}
    </Wrapper>
  )
}
