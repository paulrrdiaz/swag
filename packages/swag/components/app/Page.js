import React from 'react'
import StyledContainer from '../styled/StyledContainer.js'
import StyledDiv from '../styled/StyledDiv.js'
import Header from './Header.js'

export default function Page ({ children }) {
  return (
    <StyledContainer>

      <StyledDiv css={{ marginBottom: '1em' }}>
        <Header />
      </StyledDiv>

      {children}

    </StyledContainer>
  )
}
