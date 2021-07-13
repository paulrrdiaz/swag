import { styled } from '@stitches/react'
import transition from '../../styles/transition.js'

export default styled(
  'button',
  {
    display: 'inline-flex',
    textAlign: 'center',
    paddingLeft: '1.25em',
    paddingRight: '1.25em',
    lineHeight: '2.25em',
    borderWidth: '0',
    borderRadius: '1.5em',
    fontSize: '1.125em',
    fontWeight: '500',
    cursor: 'pointer',
    userSelect: 'none',
    ...transition,
    '&:focus': {
      outline: 'none'
    },
    variants: {
      secondary: {
        true: {
          backgroundColor: '#E2E8F0',
          color: '#111827',
          '&:hover': {
            background: '#CBD5E1'
          },
          '&:focus': {
            background: '#CBD5E1',
            boxShadow: '#E2E8F0 0px 0px 0px 2px, #CBD5E1 0px 0px 0px 3px'
          }
        }
      },
      primary: {
        true: {
          backgroundColor: '#3B82F6',
          color: '#fff',
          '&:hover': {
            background: '#2563EB'
          },
          '&:focus': {
            background: '#2563EB',
            boxShadow: '#BFDBFE 0px 0px 0px 2px, #60A5FA 0px 0px 0px 3px'
          }
        }
      },
      continue: {
        true: {
          backgroundColor: '#22C55E',
          color: '#fff',
          '&:hover': {
            background: '#16A34A'
          },
          '&:focus': {
            background: '#16A34A',
            boxShadow: '#BBF7D0 0px 0px 0px 2px, #4ADE80 0px 0px 0px 3px'
          }
        }
      },
      stop: {
        true: {
          backgroundColor: '#F43F5E',
          color: '#fff',
          '&:hover': {
            background: '#E11D48'
          },
          '&:focus': {
            background: '#E11D48',
            boxShadow: '#FECDD3 0px 0px 0px 2px, #FB7185 0px 0px 0px 3px'
          }
        }
      },
      small: {
        true: {
          fontSize: '.925em',
          paddingLeft: '.625em',
          paddingRight: '.625em',
          lineHeight: '1.5em',
          borderRadius: '1em'
        }
      }
    },
    compoundVariants: [
      {
        small: true,
        secondary: true,
        css: {
          '&:focus': {
            boxShadow: '#94A3B8 0px 0px 0px 1px'
          }
        }
      },
      {
        small: true,
        primary: true,
        css: {
          '&:focus': {
            boxShadow: '#BFDBFE 0px 0px 0px 1px'
          }
        }
      }
    ],
    defaultVariants: {
      secondary: true
    }
  }
)
