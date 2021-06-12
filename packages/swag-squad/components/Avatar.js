import React from 'react'
import { styled } from '@stitches/react'
import { StyledDiv } from '@generates/swag'
import { merge } from '@generates/merger'
import BoringAvatar from 'boring-avatars'

const StyledImage = styled('img')

export default function Avatar (props) {
  const { size = '4em' } = props
  const css = merge(
    { height: size, width: size, borderRadius: '100%' },
    props.css
  )
  return (
    <StyledDiv css={css}>
      {props.image
        ? <StyledImage src={props.image} css={css} />
        : (
            <BoringAvatar
              size={size}
              name={props.name}
              variant="marble"
              colors={['#10B981', '#6366F1', '#F43F5E', '#F59E0B']}
            />
          )
      }
    </StyledDiv>
  )
}
