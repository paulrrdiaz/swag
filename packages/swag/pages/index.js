import React from 'react'
import Link from 'next/link'
import StyledContainer from '../components/styled/StyledContainer.js'

export default function Home () {
  return (
    <StyledContainer>

      <h1>
        Swag
      </h1>

      <div>
        A set of easily extensible React components
      </div>

      <ul>
        <li>
          <Link href="/loading-bar">
            <a>
              LoadingBar
            </a>
          </Link>
        </li>
        <li>
          <Link href="/button">
            <a>
              Button
            </a>
          </Link>
        </li>
        <li>
          <Link href="/loading-button">
            <a>
              LoadingButton
            </a>
          </Link>
        </li>
        <li>
          <Link href="/fields">
            <a>
              Fields
            </a>
          </Link>
        </li>
      </ul>

    </StyledContainer>
  )
}
