import React from 'react'
import { merge } from '@generates/merger'
import { css, styled } from '@stitches/react'
import { Popover } from '@headlessui/react'
import { StyledDiv } from '@generates/swag'

const StyledImage = styled('img')

export default function UserMenu (props) {
  const popover = css({ position: 'relative' })
  const panel = css({ position: 'absolute', zIndex: 10 })
  const button = css({ padding: '0', border: '0' })
  const avatar = merge(
    {
      height: '3em',
      width: '3em',
      borderRadius: '100%',
      cursor: 'pointer'
    },
    props.css?.avatar
  )
  const content = merge(
    {
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    },
    props.css?.content
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
        <StyledDiv css={content} className="grid grid-cols-2">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </StyledDiv>
      </Popover.Panel>
    </Popover>
  )
}
