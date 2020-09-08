import React, { FunctionComponent } from 'react'
import useAnimateOnShow from '@cjenaro/useanimateonshow'

const FlyIn: FunctionComponent = ({ children }) => {
  const [Wrapper, ref, props] = useAnimateOnShow(
    { transform: `translateY(50px) scale(0.5)`, opacity: 0 },
    { transform: `translateY(0px) scale(1)`, opacity: 1 }
  )

  return (
    <Wrapper visible={ref} style={props}>
      {children}
    </Wrapper>
  )
}

export default FlyIn

export const flyInCode = `import React, { FunctionComponent } from 'react'
import useAnimateOnShow from '@cjenaro/useanimateonshow'

const FlyIn: FunctionComponent = ({ children }) => {
  const [Wrapper, ref, props] = useAnimateOnShow(
    { transform: 'translateY(50px) scale(0.5)', opacity: 0 },
    { transform: 'translateY(0px) scale(1)', opacity: 1 }
  )

  return (
    <Wrapper visible={ref} style={props}>
      {children}
    </Wrapper>
  )
}

export default FlyIn
`
