import React from 'react'

import useAnimateOnShow from '@cjenaro/useanimateonshow'
import FlyIn from './components/FlyIn'
import SlideIn from './components/SlideIn'
import Square from './components/Square'

const App = () => {
  const [Wrapper, ref, props] = useAnimateOnShow({ x: 0 }, { x: 100 })
  return (
    <>
      <header>Use animate on show</header>
      <main>
        <Wrapper visible={ref}>
          {props.x.interpolate((x) => x.toFixed(2))}
        </Wrapper>
        <h1>Fly in</h1>
        {Array.from({ length: 5 }).map((_, idx) => (
          <FlyIn key={`fly-${idx}`}>
            <img
              height='300'
              src={`https://picsum.photos/seed/${Math.ceil(
                Math.random() * idx * 1000
              )}/300`}
              alt={`Random nr ${idx}.`}
            />
          </FlyIn>
        ))}
        <h1>Slide in</h1>
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
