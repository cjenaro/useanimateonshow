import React, { FunctionComponent } from 'react'
import useAnimateOnShow from '@cjenaro/useanimateonshow'

const SlideIn: FunctionComponent<{ from: 'left' | 'right' }> = ({
  from,
  children
}) => {
  const [Wrapper, ref, props] = useAnimateOnShow(
    {
      transform: `translateX(${1000 * (from === 'left' ? 1 : -1)}px)`
    },
    {
      transform: `translateX(0px)`
    },
    { infinite: true, onShow: (showing: boolean) => console.log(showing) }
  )

  return (
    <Wrapper visible={ref} style={props}>
      {children}
    </Wrapper>
  )
}

export default SlideIn

export const slideInCode = `import React, { FunctionComponent } from 'react'
import useAnimateOnShow from '@cjenaro/useanimateonshow'

const SlideIn: FunctionComponent<{ from: 'left' | 'right' }> = ({
  from,
  children
}) => {
  const [Wrapper, ref, props] = useAnimateOnShow(
    {
      transform: \`translateX(\${1000 * (from === 'left' ? 1 : -1)}px)\`
    },
    {
      transform: \`translateX(0px)\`
    },
    { infinite: true, onShow: (showing: boolean) => console.log(showing) }
  )

  return (
    <Wrapper visible={ref} style={props}>
      {children}
    </Wrapper>
  )
}

export default SlideIn

`
