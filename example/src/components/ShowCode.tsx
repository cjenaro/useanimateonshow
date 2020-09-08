import React, { useState, FunctionComponent } from 'react'
import { animated, useSpring } from 'react-spring'

const Square: FunctionComponent = ({ children }) => {
  const [show, setShow] = useState(false)
  const props = useSpring(!show ? { maxHeight: 0 } : { maxHeight: 500 })
  const btnProps = useSpring(
    !show
      ? { borderRadius: '5px 5px 5px 5px' }
      : { borderRadius: '5px 5px 0 0' }
  )
  return (
    <div className='show-code'>
      <animated.button style={btnProps} onClick={() => setShow(!show)}>
        Show code
      </animated.button>
      <animated.div style={props}>{children}</animated.div>
    </div>
  )
}

export default Square
