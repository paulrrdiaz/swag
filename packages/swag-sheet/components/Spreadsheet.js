import React from 'react'
import { styled } from '@stitches/react'
import { useTable, useFilters, useSortBy, usePagination } from 'react-table'
import { LoadingBar, Button, StyledDiv } from '@generates/swag'
import { merge } from '@generates/merger'
import StyledTable from './styled/StyledTable.js'
import StyledTableHeader from './styled/StyledTableHeader.js'
import SpreadsheetCell from './SpreadsheetCell.js'

const Wrapper = styled(
  'div',
  {
    overflowX: 'scroll',
    border: '1px solid #E5E7EB',
    borderRadius: '.375em'
  }
)
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

      // If the row is an existing row and not an added row, call the
      // onUpdateCell hook.
      const isExisting = (data.length - addedRows - 1) >= ctx.cell.row.index
      if (isExisting && props.onUpdateCell) {
        await props.onUpdateCell({ ...ctx, setData }, value)
      }

      // If the row is an existing row and not an added row, call the
      // onUpdateData hook.
      if (isExisting && props.onUpdateData) props.onUpdateData(data)
    }
  }

  function addRow () {
    const updated = data.concat({})
    const cellId = `cell_${updated.length - 1}_${columns[0].id}`
    setAddedRows(addedRows + 1)
    setData(updated)
    setSelectedCell(cellId)
    setFocusedCell(cellId)
  }

  function onTab (evt, ctx) {
    onUpdateCell(ctx, evt.target.textContent || '')

    const index = columns.findIndex(c => c.id === ctx.cell.column.id)
    const newCol = columns[index + 1]
    if (newCol) {
      const newColId = `cell_${ctx.cell.row.index}_${newCol.id}`
      setSelectedCell(newColId)
      setFocusedCell(newColId)
    }
  }

  function onShiftTab (evt, ctx) {
    onUpdateCell(ctx, evt.target.textContent || '')

    const index = columns.findIndex(c => c.id === ctx.cell.column.id)
    const newCol = columns[index - 1]
    if (newCol) {
      const newColId = `cell_${ctx.cell.row.index}_${newCol.id}`
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

  React.useEffect(() => setData(props.data || []), [props.data])

  return (
    <Wrapper css={props.css?.wrapper}>
      {columns.length && (
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

            {!rows?.length && props.noData !== false && (
              <tr>
                <StyledTableHeader
                  as="td"
                  colSpan={columns.length}
                  css={{
                    backgroundColor: 'transparent',
                    textAlign: 'center',
                    paddingTop: '1em',
                    paddingBottom: '1em',
                    fontWeight: 'medium'
                  }}
                >
                  {props.noData || 'No data to display'}
                </StyledTableHeader>
              </tr>
            )}

            {/* Action buttons */}

            {props.canEdit !== false && props.onSaveAddedRows && (
              <tr>
                <StyledTableHeader
                  as="td"
                  colSpan={columns.length}
                  css={{ backgroundColor: 'transparent' }}
                >
                  <StyledDiv css={{ display: 'flex', alignItems: 'center' }}>

                    <StyledDiv css={{ flexShrink: 0 }}>
                      <Button
                        primary
                        small
                        onClick={addRow}
                        // This is necessary to get relatedTarget in the cell
                        // onBlur event and prevent a render.
                        data-swag-button
                        onMouseDown={evt => evt.target.focus()}
                      >
                        Add Row
                      </Button>
                    </StyledDiv>

                    {addedRows > 0 && (
                      <StyledDiv
                        css={{
                          display: 'flex',
                          alignItems: 'center',
                          marginLeft: '1em'
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
                          // This is necessary to get relatedTarget in the cell
                          // onBlur event and prevent a render.
                          data-swag-button
                          onMouseDown={evt => evt.target.focus()}
                        >
                          Cancel
                        </Button>

                        <Button
                          continue
                          small
                          css={{ flexShrink: 0 }}
                          onClick={onSaveAddedRows}
                          // This is necessary to get relatedTarget in the cell
                          // onBlur event and prevent a render.
                          data-swag-button
                          onMouseDown={evt => evt.target.focus()}
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
