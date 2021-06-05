import React from 'react'
import { styled } from '@stitches/react'
import { useTable } from 'react-table'
import StyledTable from './styled/StyledTable.js'
import StyledTableHeader from './styled/StyledTableHeader.js'
import SpreadsheetCell from './SpreadsheetCell.js'

const Wrapper = styled('div', { overflowX: 'scroll' })

export default function Spreadsheet (props) {
  const [firstRow] = props.data || []
  const columns = React.useMemo(
    () => props.columns || Object.keys(firstRow || {}).map(header => ({
      id: header,
      accessor: header
    })),
    [
      props.columns,
      firstRow
    ]
  )

  const memoizedData = React.useMemo(() => props.data, [props.data])

  function onCellUpdate (ctx, value) {
    if (props.onCellUpdate) {
      props.onCellUpdate({ ...ctx, setData: props.setData }, value)
    } else {
      props.data[ctx.cell.row.index][ctx.cell.column.id] = value
      props.setData(props.data)
    }
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data: memoizedData
  })

  return (
    <Wrapper css={props.css?.wrapper}>
      {props.data && (
        <StyledTable {...getTableProps()} css={props.css?.table}>
          <thead>
            {headerGroups.map(headerGroup => {
              const { key, ...rest } = headerGroup.getHeaderGroupProps()
              return (
                <tr {...rest} key={key}>
                  {headerGroup.headers.map(column => {
                    const { key, ...rest } = column.getHeaderProps()
                    return (
                      <StyledTableHeader
                        {...rest}
                        key={key}
                        css={props.css?.tableHeader}
                      >
                        {column.id}
                      </StyledTableHeader>
                    )
                  })}
                </tr>
              )
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              const { key, ...rest } = row.getRowProps()
              return (
                <tr {...rest} key={key}>
                  {row.cells.map(cell => {
                    const { key, ...rest } = cell.getCellProps()
                    return (
                      <SpreadsheetCell
                        {...rest}
                        key={key}
                        cell={cell}
                        styles={props.css?.tableCell}
                        onCellUpdate={onCellUpdate}
                        canEdit={props.canEdit}
                      />
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </StyledTable>
      )}
    </Wrapper>
  )
}
