import React from 'react'
import Link from 'next/link'
import { styled } from '@stitches/react'
import { StyledLink } from '@generates/swag'
import Page from '../components/app/Page.js'

const UnorderedList = styled('ul')
const HeadingTwo = styled('h2')

export default function Home () {
  return (
    <Page>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', margin: '0' }}>
        Examples
      </HeadingTwo>

      <UnorderedList css={{
        '& li': {
          marginTop: '.5em',
          marginBottom: '.5em'
        }
      }}>
        <li>
          <Link href="/sign-in">
            <StyledLink>
              Sign in
            </StyledLink>
          </Link>
        </li>
        <li>
          <Link href="/sign-up">
            <StyledLink>
              Sign up
            </StyledLink>
          </Link>
        </li>
        <li>
          <Link href="/verify-email">
            <StyledLink>
              Verify email
            </StyledLink>
          </Link>
        </li>
        <li>
          <Link href="/forgot-password">
            <StyledLink>
              Forgot password
            </StyledLink>
          </Link>
        </li>
        <li>
          <Link href="/reset-password">
            <StyledLink>
              Reset password
            </StyledLink>
          </Link>
        </li>
      </UnorderedList>

    </Page>
  )
}
