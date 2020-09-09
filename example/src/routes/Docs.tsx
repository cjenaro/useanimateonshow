import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from '@reach/router'

const Docs: FunctionComponent<RouteComponentProps> = () => {
  return (
    <>
      <h1>How to use the library</h1>

      <h2>Notes</h2>
      <ul>
        <li>
          <p>
            The library uses{' '}
            <a
              href='https://www.react-spring.io/'
              target='_blank'
              rel='noopener noreferrer'
            >
              React Spring
            </a>{' '}
            if you don't know how to use it refer to their{' '}
            <a
              href='https://www.react-spring.io/docs'
              target='_blank'
              rel='noopener noreferrer'
            >
              docs
            </a>
          </p>
        </li>
        <li>
          <p>
            The library uses the{' '}
            <a
              href='https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API'
              target='_blank'
              rel='noopener noreferrer'
            >
              Intersection Observer
            </a>{' '}
            to get when the element is showing on screen, if you want/need IE 11
            support, you will need a{' '}
            <a
              href='https://github.com/w3c/IntersectionObserver'
              target='_blank'
              rel='noopener noreferrer'
            >
              polyfill
            </a>
          </p>
        </li>
      </ul>

      <h2>Installation</h2>
      <pre className='br o-none'>
        npm install --save @cjenaro/useanimateonshow
      </pre>
      <pre className='br o-none'>yarn add @cjenaro/useanimateonshow</pre>

      <h2>Usage</h2>
      <p>
        The useAnimateOnShow function takes in from and to objects that are just
        as the react spring useSpring argument, you can configure duration and
        spring config here too.
      </p>
      <pre className='br o-none'>
        {`import useAnimateOnShow from '@cjenaro/useanimateonshow'

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
`}
      </pre>

      <p>Lastly, there is a third argument with some optional configuration</p>
      <pre className="br">
        {`{ infinite: true, onShow: (showing: boolean) => console.log(showing) }`}
      </pre>
      <p>
        Infinite means that once the element leaves the screen it will animate
        out and then back in when it is shown again, there is also an optional
        onShow function that receives wether the element is showing or not.
      </p>
    </>
  )
}

export default Docs
