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
  borderRadius: '.375em',
  border: '1px solid #D1D5DB',
  '&:focus': {
    outline: 'none',
    borderColor: '#3B82F6',
    boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, #BFDBFE 0px 0px 0px 3px'
  }
})
