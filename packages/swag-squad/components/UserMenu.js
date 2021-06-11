import React from 'react'
import { merge } from '@generates/merger'
import { css, styled } from '@stitches/react'
import { Popover } from '@headlessui/react'
import { StyledDiv } from '@generates/swag'

const StyledImage = styled('img')

export default function UserMenu (props) {
  const popover = css({ position: 'relative' })
  const panel = css(merge(
    {
      position: 'absolute',
      zIndex: 10,
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      padding: '1em',
      backgroundColor: '#F5F5F5',
      borderRadius: '.375em'
    },
    props.css?.content
  ))
  const button = css({ padding: '0', border: '0', borderRadius: '100%' })
  const avatar = merge(
    {
      height: '3em',
      width: '3em',
      borderRadius: '100%',
      cursor: 'pointer'
    },
    props.css?.avatar
  )

  return (
    <Popover className={popover}>

      <Popover.Button className={button()}>
        <StyledImage
          src={props.avatar}
          css={avatar}
        />
      </Popover.Button>

      <Popover.Panel className={panel()}>
        {props.children}
      </Popover.Panel>

    </Popover>
  )
}
