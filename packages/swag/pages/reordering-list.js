import React from 'react'
import { css } from '@stitches/react'
import ReorderingList from '../components/ReorderingList.js'
import StyledContainer from '../components/styled/StyledContainer.js'
import StyledDiv from '../components/styled/StyledDiv.js'

export default function ReorderingListPage () {
  return (
    <StyledContainer>

      <h1>
        ReorderingList
      </h1>

      <div className={css({ display: 'flex', alignItems: 'center', marginTop: '1em' })()}>

        <ReorderingList
          items={[
            <StyledDiv key={1} css={{ backgroundColor: '#6366F1', color: '#fff', padding: '1em' }}>
              One
            </StyledDiv>,
            <StyledDiv key={2} css={{ backgroundColor: '#F43F5E', color: '#fff', padding: '1em' }}>
              Two
            </StyledDiv>
          ]}
        />

      </div>

    </StyledContainer>
  )
}
