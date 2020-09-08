import React, { FunctionComponent } from 'react'
import useAnimateOnShow from '@cjenaro/useanimateonshow'

const Count: FunctionComponent = () => {
  const [Wrapper, ref, props] = useAnimateOnShow({ x: 0 }, { x: 100 })

  return (
    <h1>
      <Wrapper visible={ref}>
        {props.x.interpolate((x) => x.toFixed(2))}
      </Wrapper>
    </h1>
  )
}

export default Count

export const countCode = `import React, { FunctionComponent } from 'react'
import useAnimateOnShow from '@cjenaro/useanimateonshow'

const Count: FunctionComponent = () => {
  const [Wrapper, ref, props] = useAnimateOnShow({ x: 0 }, { x: 100 })

  return (
    <h1>
      <Wrapper visible={ref}>
        {props.x.interpolate((x) => x.toFixed(2))}
      </Wrapper>
    </h1>
  )
}

export default Count
`
