import React from 'react'
import StyledTableCell from './styled/StyledTableCell.js'

export default function SpreadsheetCell (props) {
  const { canEdit = true } = props
  const [value, setValue] = React.useState(props.cell.value)
  const [css, setCss] = React.useState()
  const [clickTimeout, setClickTimeout] = React.useState()
  const ctx = { ...props, setCss }
  const ref = React.useRef()

  // Update the value if it's updated externally after render.
  React.useEffect(() => setValue(props.cell.value), [props.cell.value])

  const combinedCss = {
    ...props.isSelected && { backgroundColor: '#F0F9FF' },
    ...canEdit && { cursor: 'cell' },
    ...css
  }

  React.useEffect(
    () => props.isFocused && ref.current.focus(),
    [props.isFocused]
  )

  // Add cell title so that it is displayed when hovering over a cell.
  let title = props.cell.column.id
  if (canEdit) title += ' (double-click to edit the value)'

  return (
    <StyledTableCell
      ref={ref}
      data-col={props.cell.column.id}
      data-id={props.id}
      title={title}
      contentEditable={props.isFocused}
      suppressContentEditableWarning={true}
      css={combinedCss}
      onClick={evt => {
        if (evt.target.localName !== 'a') {
          if (clickTimeout && props.onFocusCell) {
            setClickTimeout()
            clearTimeout(clickTimeout)
            props.onFocusCell(evt, props.id)
          } else if (props.onSelectCell) {
            props.onSelectCell(evt, props.id)
            if (canEdit && props.onFocusCell) {
              setClickTimeout(setTimeout(
                () => {
                  setClickTimeout()
                  clearTimeout(clickTimeout)
                },
                250
              ))
            }
          }
        }
      }}
      onKeyDown={evt => {
        if (evt.key === 'Tab') {
          if (evt.shiftKey && props.onShiftTab) {
            props.onShiftTab(evt, ctx)
          } else if (props.onTab) {
            props.onTab(evt, ctx)
          }
        } else if (evt.key === 'Escape' && props.onEscape) {
          props.onEscape(evt)
        } else if (evt.key === 'Enter' && props.onBlur) {
          props.onBlur(evt, ctx)
        }
      }}
      onBlur={evt => {
        if (!evt.relatedTarget?.getAttribute('data-swag-button')) {
          props.onBlur(evt, ctx)
        }
      }}
      {...props.cell.getCellProps()}
    >
      {value}
    </StyledTableCell>
  )
}
