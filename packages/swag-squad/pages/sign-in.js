import React from 'react'
import { styled } from '@stitches/react'
import Page from '../components/app/Page.js'
import SignInForm from '../components/forms/SignInForm.js'
import { Alert, StyledDiv } from '@generates/swag'

const HeadingTwo = styled('h2')

export default function SignInPage () {
  const [isLoading, setIsLoading] = React.useState(false)
  const [successMessage, setSuccessMessage] = React.useState()
  const [data, setdata] = React.useState()

  function signIn (input) {
    setIsLoading(true)
    setdata(input)
    setTimeout(
      () => {
        setSuccessMessage('You have successfully signed in!')
        setIsLoading(false)
      },
      3000
    )
  }

  return (
    <Page>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        Sign in
      </HeadingTwo>

      <br />

      {successMessage && (
        <Alert
          level="success"
          onClose={() => setSuccessMessage()}
          css={{
            width: '494px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '1.5em'
          }}
        >

          <StyledDiv css={{ fontWeight: '500' }}>
            {successMessage}
          </StyledDiv>

          <pre>
            <code>
              {JSON.stringify(data, undefined, 2)}
            </code>
          </pre>

        </Alert>
      )}

      <SignInForm onSubmit={signIn} isLoading={isLoading} />

    </Page>
  )
}
