import React from 'react'
import { StyledContainer, StyledDiv } from '@generates/swag'
import Header from './Header.js'

export default function Page ({ children, ...props }) {
  return (
    <StyledContainer {...props}>

      <StyledDiv css={{ marginBottom: '1em' }}>
        <Header />
      </StyledDiv>

      {children}

    </StyledContainer>
  )
}
