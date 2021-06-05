import React from 'react'
import StyledTableCell from './styled/StyledTableCell.js'

export default function SpreadsheetCell (props) {
  const [value, setValue] = React.useState(props.cell.value)
  const [css, setCss] = React.useState(props.css)
  const [isEditing, setIsEditing] = React.useState(false)
  const ctx = { ...props, setCss }

  // Update the value if it's updated externally after render.
  React.useEffect(
    () => {
      setValue(props.cell.value)
      setCss(props.css)
    },
    [
      props.cell.value,
      props.css
    ]
  )

  return (
    <StyledTableCell
      onClick={() => props.canEdit && setIsEditing(true)}
      contentEditable={isEditing}
      suppressContentEditableWarning={true}
      onBlur={evt => {
        props.onCellUpdate(ctx, evt.target.innerHTML)
        setIsEditing(false)
      }}
      css={css}
      {...props.cell.getCellProps()}
    >
      {value}
    </StyledTableCell>
  )
}
