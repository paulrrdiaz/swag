import { styled } from '@stitches/react'

export default styled('input', {
  display: 'block',
  boxSizing: 'border-box',
  width: '100%',
  marginTop: '.25em',
  marginBottom: '.25em',
  paddingTop: '.75em',
  paddingBottom: '.75em',
  paddingLeft: '1em',
  paddingRight: '1em',
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
    boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, #BFDBFE 0px 0px 0px 3px'
  }
})
