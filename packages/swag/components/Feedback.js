import StyledDiv from './styled/StyledDiv.js'

export default function Feedback (props) {
  return (
    <StyledDiv
      id={props.id}
      css={{
        color: '#DC2626',
        marginTop: '.5em',
        marginBottom: '.5em',
        fontSize: '.925em',
        fontWeight: '500'
      }}
    >
      {Array.isArray(props.feedback)
        ? props.feedback.map((feedback, i) => (
          <StyledDiv key={i} css={{ marginTop: '.5em', marginBottom: '.5em' }}>
            {feedback}
          </StyledDiv>
        ))
        : props.feedback
      }
    </StyledDiv>
  )
}
