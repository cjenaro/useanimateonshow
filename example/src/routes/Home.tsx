import React, { FunctionComponent } from 'react'

import FlyIn, { flyInCode } from '../components/FlyIn'
import SlideIn, { slideInCode } from '../components/SlideIn'
import Square from '../components/Square'
import ShowCode from '../components/ShowCode'
import Count, { countCode } from '../components/Count'
import { RouteComponentProps } from '@reach/router'

const Home: FunctionComponent<RouteComponentProps> = () => {
  return (
    <>
      <h1>Count</h1>
      <Count />
      <ShowCode code={countCode} />
      <h1>Fly in</h1>
      {Array.from({ length: 5 }).map((_, idx) => (
        <FlyIn key={`fly-${idx}`}>
          <Square
            color={`hsl(${Math.floor(Math.random() * idx * 1215)}, 93%, 27%)`}
          />
        </FlyIn>
      ))}
      <ShowCode code={flyInCode} />
      <h1>Slide in</h1>
      {Array.from({ length: 5 }).map((_, idx) => (
        <SlideIn key={`fly-${idx}`} from={idx % 2 === 0 ? 'left' : 'right'}>
          <Square
            color={`hsl(${Math.floor(Math.random() * idx * 1000)}, 93%, 27%)`}
          />
        </SlideIn>
      ))}
      <ShowCode code={slideInCode} />
    </>
  )
}

export default Home
