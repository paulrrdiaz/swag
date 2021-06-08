import React from 'react'
// import { css } from '@stitches/react'
import Page from '../components/app/Page.js'
import Alert from '../components/Alert.js'

export default function AlertPage () {
  return (
    <Page>

      <h1>
        Alert
      </h1>

      <div>
        <Alert level="success" canClose={true} css={{ marginTop: '2em' }}>
          Donec pharetra metus id nulla feugiat ultricies. Vivamus porta
          bibendum tempus. Suspendisse quis felis ex. Phasellus vel ullamcorper
          lacus. Cras nisi quam, rhoncus fringilla semper ut, venenatis eget
          arcu. Nulla elementum ultrices ornare. Sed sed molestie sapien, ut
          ullamcorper velit.
        </Alert>
      </div>

    </Page>
  )
}
