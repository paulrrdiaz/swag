import React from 'react'
import TextField from './TextField.js'

export default function EmailField (props) {
  return (
    <TextField
      type="email"
      id="email"
      label="Email address"
      {...props}
    />
  )
}
