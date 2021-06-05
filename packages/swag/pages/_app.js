import React from 'react'
import { global } from '@stitches/react'

const globalStyles = global({
  body: {
    backgroundColor: '#F3F4F6',
    fontSize: '16px',
    fontFamily: 'sans-serif'
  }
})

export default function AppPage ({ Component, pageProps }) {
  globalStyles()

  return <Component {...pageProps} />
}
