import { styled } from '@stitches/react'

export default styled(
  'td',
  {
    boxSizing: 'border-box',
    verticalAlign: 'top',
    padding: '8px',
    height: '100%',
    minHeight: '35px',
    minWidth: '72px',
    color: '#1F2937',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#E5E7EB',
    '&:focus': {
      outline: 'none',
      borderWidth: '2px',
      padding: '5px',
      borderColor: '#3B82F6'
    }
  }
)
