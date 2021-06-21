import { styled } from '@stitches/react'
import transition from '../../styles/transition.js'

export default styled(
  'a',
  {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '1em',
    paddingRight: '1em',
    paddingTop: '.75em',
    paddingBottom: '.75em',
    fontSize: '.825em',
    fontWeight: '500',
    color: '#4B5563',
    ...transition,
    '&:hover': {
      backgroundColor: '#E5E5E5',
      color: '#111827'
    }
  }
)
