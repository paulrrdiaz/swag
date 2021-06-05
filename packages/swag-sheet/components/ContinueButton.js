import { styled } from '@stitches/react'

export default styled(
  'button',
  {
    cursor: 'pointer',
    backgroundColor: '#10B981',
    color: 'white',
    borderRadius: '5px',
    padding: '.6em 1em',
    fontSize: '1.125rem',
    border: 'none',
    transition: 'all .25s',
    ':hover': {
      backgroundColor: '#059669'
    }
  }
)
