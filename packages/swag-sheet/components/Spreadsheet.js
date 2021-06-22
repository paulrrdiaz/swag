import React from 'react'
import { styled } from '@stitches/react'
import { useTable, useFilters, useSortBy } from 'react-table'
import { LoadingBar } from '@generates/swag'
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
  const [firstRow] = props.data || []
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

  const memoizedData = React.useMemo(() => props.data, [props.data])

  function onCellUpdate (ctx, value) {
    if (props.canEdit) {
      if (props.onCellUpdate) {
        props.onCellUpdate({ ...ctx, setData: props.setData }, value)
      } else if (props.setData) {
        props.setData(props.data)
      } else {
        props.data[ctx.cell.row.index][ctx.cell.column.id] = value
      }
    }
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { pageIndex, pageSize, sortBy, filters }
  } = useTable(
    merge({ columns, data: memoizedData }, props.table?.options),
    useFilters,
    useSortBy
  )

  React.useEffect(
    () => props.onPageIndex && props.onPageIndex(pageIndex),
    [
      props,
      pageIndex
    ]
  )

  React.useEffect(
    () => props.onPageSize && props.onPageSize(pageSize),
    [
      props,
      pageSize
    ]
  )

  React.useEffect(
    () => props.onSortBy && props.onSortBy(sortBy),
    [
      props,
      sortBy
    ]
  )

  React.useEffect(
    () => props.onFilter && props.onFilter(filters),
    [
      props,
      filters
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
                        {...rest}
                        key={key}
                        css={merge(
                          { verticalAlign: 'top' },
                          props.css?.tableHeader
                        )}
                      >

                        {column.render('Header')}

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
          </tbody>
        </StyledTable>
      )}
    </Wrapper>
  )
}
