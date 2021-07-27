import React from 'react'
import { styled } from '@stitches/react'
import { useTable, useFilters, useSortBy, usePagination } from 'react-table'
import { LoadingBar, Button, StyledDiv } from '@generates/swag'
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
  const { canEdit = true } = props
  const initialRender = React.useRef(true)
  const [data, setData] = React.useState(props.data || [])
  const [addedRows, setAddedRows] = React.useState(0)
  const [firstRow] = data
  const columnKeys = firstRow && Object.keys(firstRow)
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
  const [selectedCell, setSelectedCell] = React.useState()
  const [focusedCell, setFocusedCell] = React.useState()

  async function onUpdateCell (ctx, value) {
    if (canEdit) {
      data[ctx.cell.row.index][ctx.cell.column.id] = value
      setData(data)

      if (props.onUpdateCell) {
        await props.onUpdateCell({ ...ctx, setData }, value)
      }

      // If the row is an existing row and not an added row, call the
      // onUpdateData hook.
      if (props.onUpdateData && ctx.cell.row.index < props.data.length) {
        props.onUpdateData(data)
      }
    }
  }

  function addRow () {
    const updated = data.concat({})
    const cellId = `cell_${updated.length - 1}_${columnKeys[0]}`
    setAddedRows(addedRows + 1)
    setData(updated)
    setSelectedCell(cellId)
    setFocusedCell(cellId)
  }

  function onTab (evt, ctx) {
    onUpdateCell(ctx, evt.target.textContent || '')

    const newColName = columnKeys[columnKeys.indexOf(ctx.cell.column.id) + 1]
    const newColId = `cell_${ctx.cell.row.index}_${newColName}`
    if (newColId) {
      setSelectedCell(newColId)
      setFocusedCell(newColId)
    }
  }

  function onShiftTab (evt, ctx) {
    onUpdateCell(ctx, evt.target.textContent || '')

    const newColName = columnKeys[columnKeys.indexOf(ctx.cell.column.id) - 1]
    const newColId = `cell_${ctx.cell.row.index}_${newColName}`
    if (newColId) {
      setSelectedCell(newColId)
      setFocusedCell(newColId)
    }
  }

  function onBlur (evt, ctx) {
    setFocusedCell()
    onUpdateCell(ctx, evt.target.textContent || '')
  }

  function onEscape () {
    setSelectedCell()
    setFocusedCell()
  }

  async function onSaveAddedRows () {
    const rows = data.slice(data.length - addedRows, data.length)
    await props.onSaveAddedRows(rows)
    setAddedRows(0)
  }

  function onCancelAddedRows () {
    setAddedRows(0)
    setData(data.slice(0, data.length - addedRows))
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
              return (
                <StyledTr
                  key={key}
                  data-id={key}
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
                        id={key}
                        cell={cell}
                        styles={props.css?.tableCell}
                        canEdit={canEdit}
                        isSelected={selectedCell === key}
                        isFocused={focusedCell === key}
                        onSelectCell={(evt, id) => setSelectedCell(id)}
                        onFocusCell={(evt, id) => setFocusedCell(id)}
                        onBlur={onBlur}
                        onEscape={onEscape}
                        onTab={onTab}
                        onShiftTab={onShiftTab}
                        {...rest}
                      />
                    )
                  })}
                </StyledTr>
              )
            })}

            {/* Action buttons */}

            {props.onSaveAddedRows && (
              <tr>
                <StyledTableHeader
                  as="td"
                  colSpan={columns.length}
                  css={{ backgroundColor: 'transparent' }}
                >
                  <StyledDiv
                    css={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >

                    <StyledDiv css={{ flexShrink: 0 }}>
                      <Button primary small onClick={addRow}>
                        Add Row
                      </Button>
                    </StyledDiv>

                    {addedRows > 0 && (
                      <StyledDiv
                        css={{
                          display: 'flex',
                          alignItems: 'center',
                          textAlign: 'right'
                        }}
                      >

                        <StyledDiv css={{
                          fontSize: '.875em',
                          marginRight: '1em'
                        }}>
                          {addedRows} row(s) added
                        </StyledDiv>

                        <Button
                          small
                          css={{ flexShrink: 0, marginRight: '.75em' }}
                          onClick={onCancelAddedRows}
                        >
                          Cancel
                        </Button>

                        <Button
                          continue
                          small
                          css={{ flexShrink: 0 }}
                          onClick={onSaveAddedRows}
                        >
                          Save
                        </Button>

                      </StyledDiv>
                    )}

                  </StyledDiv>
                </StyledTableHeader>
              </tr>
            )}

          </tbody>
        </StyledTable>
      )}
    </Wrapper>
  )
}
