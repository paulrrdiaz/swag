import { styled } from '@stitches/react'

export default styled(
  'a',
  {
    cursor: 'pointer',
    marginRight: '1em',
    color: '#EF4444',
    textDecoration: 'underline',
    fontSize: '1.125rem',
    transition: 'all .25s',
    ':hover': {
      color: '#DC2626',
      textDecoration: 'none'
    }
  }
)
