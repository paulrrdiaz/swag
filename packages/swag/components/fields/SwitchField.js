import React from 'react'
import { merge } from '@generates/merger'
import { motion } from 'framer-motion'
import StyledDiv from '../styled/StyledDiv.js'
import StyledLabel from '../styled/StyledLabel.js'

export default function SwitchField (props) {
  const {
    value,
    children,
    transition = { type: 'spring', mass: 0.5 },
    ...rest
  } = props
  const [isOn, setIsOn] = React.useState(value)

  const body = merge(
    {
      display: 'flex',
      flexShrink: 0,
      cursor: 'pointer',
      alignItems: 'center',
      backgroundColor: '#E2E8F0',
      height: '1.5em',
      width: '2.5em',
      paddingLeft: '.175em',
      paddingRight: '.175em',
      borderRadius: '1.5em'
    },
    props.css?.body
  )

  const button = merge(
    {
      height: '1.125em',
      width: '1.125em',
      backgroundColor: '#fff',
      borderRadius: '100%'
    },
    props.css?.body
  )

  return (
    <StyledDiv
      css={merge({ display: 'flex' }, props.css?.wrapper)}
      onClick={() => setIsOn(!isOn)}
      {...rest}
    >

      <motion.div
        initial={false}
        style={body}
        animate={{ backgroundColor: isOn ? '#22C55E' : '#E2E8F0' }}
      >
        <motion.div
          initial={false}
          style={button}
          animate={{ x: isOn ? 22.5 : 0 }}
          transition={transition}
        />
      </motion.div>

      <StyledLabel
        css={merge(
          { marginLeft: '.75em', paddingBottom: 0, lineHeight: '1.625em' },
          props.css?.label
        )}
      >
        {children}
      </StyledLabel>

    </StyledDiv>
  )
}
