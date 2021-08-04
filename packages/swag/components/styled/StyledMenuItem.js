import { styled } from '@stitches/react'
import Menu from '../../components/Menu.js'
import transition from '../../styles/transition.js'

export default styled(
  Menu.Button,
  {
    width: '100%',
    borderWidth: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '1em',
    paddingRight: '1em',
    paddingTop: '.75em',
    paddingBottom: '.75em',
    fontWeight: '500',
    color: '#4B5563',
    ...transition,
    '&:hover': {
      backgroundColor: '#E5E5E5',
      color: '#111827'
    }
  }
)
