import React from 'react'
// import { css } from '@stitches/react'
import Page from '../components/app/Page.js'
import Alert from '../components/Alert.js'
import Button from '../components/buttons/Button.js'

export default function AlertPage () {
  const [show, setShow] = React.useState()
  const onClose = () => {}

  function showAlert () {
    setShow(true)
    setTimeout(() => setShow(false), 3000)
  }

  return (
    <Page>

      <h1>
        Alert
      </h1>

      {show && (
        <div>
          <Alert level="info" shouldScrollTo={true} css={{ marginTop: '2em' }}>
            Donec pharetra metus id nulla feugiat ultricies. Vivamus porta
            bibendum tempus. Suspendisse quis felis ex. Phasellus vel ullamcor
            lacus. Cras nisi quam, rhoncus fringilla semper ut, venenatis eget
            arcu. Nulla elementum ultrices ornare. Sed sed molestie sapien, ut
            ullamcorper velit.
          </Alert>
        </div>
      )}

      <div>
        <Alert level="success" onClose={onClose} css={{ marginTop: '2em' }}>
          Donec pharetra metus id nulla feugiat ultricies. Vivamus porta
          bibendum tempus. Suspendisse quis felis ex. Phasellus vel ullamcorper
          lacus. Cras nisi quam, rhoncus fringilla semper ut, venenatis eget
          arcu. Nulla elementum ultrices ornare. Sed sed molestie sapien, ut
          ullamcorper velit.
        </Alert>
      </div>

      <div>
        <Alert level="error" css={{ marginTop: '2em' }}>
          Donec pharetra metus id nulla feugiat ultricies. Vivamus porta
          bibendum tempus. Suspendisse quis felis ex. Phasellus vel ullamcorper
          lacus. Cras nisi quam, rhoncus fringilla semper ut, venenatis eget
          arcu. Nulla elementum ultrices ornare. Sed sed molestie sapien, ut
          ullamcorper velit.
        </Alert>
      </div>

      <div>
        <Alert level="info" onClose={onClose} css={{ marginTop: '2em' }}>
          Donec pharetra metus id nulla feugiat ultricies. Vivamus porta
          bibendum tempus. Suspendisse quis felis ex. Phasellus vel ullamcorper
          lacus. Cras nisi quam, rhoncus fringilla semper ut, venenatis eget
          arcu. Nulla elementum ultrices ornare. Sed sed molestie sapien, ut
          ullamcorper velit.
        </Alert>
      </div>

      <Button onClick={showAlert} css={{ marginTop: '2em' }}>
        Show Alert
      </Button>

    </Page>
  )
}
