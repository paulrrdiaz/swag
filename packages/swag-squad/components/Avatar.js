import React from 'react'
import { styled } from '@stitches/react'
import { StyledDiv } from '@generates/swag'
import { merge } from '@generates/merger'
import { HiOutlineUserCircle } from 'react-icons/hi'

const StyledImage = styled('img')

export default function Avatar (props) {
  const { size = '1.5em' } = props
  const container = merge(
    {
      height: size,
      width: size,
      borderRadius: '100%',
      background: 'linear-gradient(#38BDF8, #0284C7)',
      color: '#fff',
      overflow: 'hidden',
      fontSize: '2em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& > svg > path': {
        strokeWidth: '1.5'
      }
    },
    props.css
  )

  return (
    <StyledDiv css={container}>
      {props.image
        ? <StyledImage src={props.image} css={{ width: '100%' }} />
        : <HiOutlineUserCircle />
      }
    </StyledDiv>
  )
}
