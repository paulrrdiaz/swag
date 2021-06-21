import React from 'react'
import { motion } from 'framer-motion'
import StyledDiv from './styled/StyledDiv.js'

export default function ReorderingList (props) {
  const { items, ...rest } = props
  const constraintsRef = React.useRef(null)
  return (
    <StyledDiv {...rest} ref={constraintsRef}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          drag="y"
          dragConstraints={constraintsRef}
          whileDrag={{ zIndex: 10 }}
        >
          {item}
        </motion.div>
      ))}
    </StyledDiv>
  )
}
