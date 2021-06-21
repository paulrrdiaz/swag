import React from 'react'
import { Menu } from '@generates/swag'
import Avatar from './Avatar.js'
import { merge } from '@generates/merger'

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
      button={merge(
        {
          css: {
            padding: '0'
          }
        },
        props.button
      )}
      css={props.css?.menu}
    >
      {props.children}
    </Menu>
  )
}
