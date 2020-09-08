import React from 'react'

import useAnimateOnShow from '@cjenaro/useanimateonshow'
import FlyIn, { flyInCode } from './components/FlyIn'
import SlideIn, { slideInCode } from './components/SlideIn'
import Square from './components/Square'
import ShowCode from './components/ShowCode'

const countCode = `import React, { FunctionComponent } from 'react'
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

const App = () => {
  const [Wrapper, ref, props] = useAnimateOnShow({ x: 0 }, { x: 100 })
  return (
    <>
      <header>Use animate on show</header>
      <main>
        <h1>Count</h1>
        <ShowCode>
          <pre>{countCode}</pre>
        </ShowCode>
        <h1>
          <Wrapper visible={ref}>
            {props.x.interpolate((x) => x.toFixed(2))}
          </Wrapper>
        </h1>
        <h1>Fly in</h1>
        <ShowCode>
          <pre>{flyInCode}</pre>
        </ShowCode>
        {Array.from({ length: 5 }).map((_, idx) => (
          <FlyIn key={`fly-${idx}`}>
            <Square
              color={`hsl(${Math.floor(Math.random() * idx * 1215)}, 93%, 27%)`}
            />
          </FlyIn>
        ))}
        <h1>Slide in</h1>
        <ShowCode>
          <pre>{slideInCode}</pre>
        </ShowCode>
        {Array.from({ length: 5 }).map((_, idx) => (
          <SlideIn key={`fly-${idx}`} from={idx % 2 === 0 ? 'left' : 'right'}>
            <Square
              color={`hsl(${Math.floor(Math.random() * idx * 1000)}, 93%, 27%)`}
            />
          </SlideIn>
        ))}
      </main>
      <footer>
        <a
          href='http://github.com/jenaro94/useanimateonshow'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
        </a>
      </footer>
    </>
  )
}

export default App
