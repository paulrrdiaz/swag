import React from 'react'
import { Menu } from '@generates/swag'
import Avatar from './Avatar.js'

export default function UserMenu (props) {
  return (
    <Menu
      trigger={
        <Avatar
          image={props.avatar}
          size={props.size}
          css={props.css?.avatar}
        />
      }
      button={props.button}
      css={props.css?.menu}
    >
      {props.children}
    </Menu>
  )
}
