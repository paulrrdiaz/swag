import React from 'react'
import Link from 'next/link'
import { StyledContainer } from '@generates/swag'

export default function Home () {
  return (
    <StyledContainer>

      <h1>
        swag-squad
      </h1>

      <div>

      </div>

      <ul>
        <li>
          <Link href="/sign-in">
            <a>
              Sign in
            </a>
          </Link>
        </li>
        <li>
          <Link href="/sign-up">
            <a>
              Sign up
            </a>
          </Link>
        </li>
        <li>
          <Link href="/verify-email">
            <a>
              Verify email
            </a>
          </Link>
        </li>
        <li>
          <Link href="/forgot-password">
            <a>
              Forgot password
            </a>
          </Link>
        </li>
        <li>
          <Link href="/reset-password">
            <a>
              Reset password
            </a>
          </Link>
        </li>
      </ul>

    </StyledContainer>
  )
}
