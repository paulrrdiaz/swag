import { styled } from '@stitches/react'

export default styled('input', {
  display: 'block',
  boxSizing: 'border-box',
  width: '100%',
  marginTop: '.25em',
  marginBottom: '.25em',
  paddingTop: '.625em',
  paddingBottom: '.625em',
  paddingLeft: '.75em',
  paddingRight: '.75em',
  fontSize: '1.125em',
  backgroundColor: '#FAFAFA',
  color: '#262626',
  borderRadius: '.375em',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: '#D4D4D4',
  appearance: 'none',
  '&:focus': {
    outline: 'none',
    borderColor: '#3B82F6',
    boxShadow: '#BFDBFE 0px 0px 0px 3px'
  },
  variants: {
    small: {
      true: {
        fontSize: '.8em',
        paddingTop: '.375em',
        paddingBottom: '.375em',
        paddingLeft: '.5em',
        paddingRight: '.5em',
        '&:focus': {
          boxShadow: '#BFDBFE 0px 0px 0px 2px'
        }
      }
    },
    level: {
      error: {
        color: '#DC2626'
      }
    }
  }
})
