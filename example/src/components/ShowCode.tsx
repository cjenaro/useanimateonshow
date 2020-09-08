import React, { useState, FunctionComponent, useRef } from 'react'
import { animated, useSpring } from 'react-spring'

const getRandom = (x: number) => Math.floor(Math.random() * 360 * x)
const doNothing = () => {}
const ShowCode: FunctionComponent<{ code: string }> = ({ code }) => {
  const [show, setShow] = useState(false)
  const [copied, setCopied] = useState(false)
  const codeRef = useRef<HTMLTextAreaElement>(null)
  const props = useSpring(
    !show
      ? { maxHeight: 0, overflowY: 'hidden' }
      : { maxHeight: 1000, overflowY: 'scroll' }
  )

  const copiedProps = useSpring(
    !copied
      ? { transform: 'translate(-50%, 100px)' }
      : { transform: 'translate(-50%, -50px)' }
  )

  const btnProps = useSpring(
    !show
      ? {
          borderRadius: '5px 5px 5px 5px',
          color: '#000000',
          backgroundImage: `linear-gradient(0deg, hsla(334, 65%, 81%, 0) 0%, hsla(400, 80%, 55%, 0) 30%, hsla(270, 42%, 48%, 0) 45%, hsla(232, 71%, 36%, 0) 68%, hsla(212, 66%, 75%, 0) 100%)`
        }
      : {
          borderRadius: '5px 5px 0 0',
          color: '#ffffff',
          backgroundImage: `linear-gradient(${getRandom(
            1
          )}deg, hsla(${getRandom(334)}, 65%, 81%, 0) 0%, hsla(${getRandom(
            300
          )}, 80%, 55%, 1) 30%, hsla(${getRandom(
            270
          )}, 42%, 48%, 1) 45%, hsla(${getRandom(
            232
          )}, 71%, 36%, 1) 68%, hsla(${getRandom(212)}, 66%, 75%, 1) 100%)`
        }
  )

  const copyCode = () => {
    if (!codeRef || !codeRef.current) return
    codeRef.current.select()
    codeRef.current.setSelectionRange(0, 99999)
    document.execCommand('copy')
    setCopied(true)
  }

  const uncopyCode = () => {
    setCopied(false)
  }

  return (
    <div className='show-code'>
      <animated.button style={btnProps} onClick={() => setShow(!show)}>
        Show code
      </animated.button>
      <animated.div style={props}>
        <pre>{code}</pre>
        <button onClick={copyCode}>Copy code!</button>
        <textarea
          ref={codeRef}
          name='code'
          id='code'
          onChange={doNothing}
          value={code}
        />
      </animated.div>
      <animated.div style={copiedProps} className='copied'>
        Code copied!{' '}
        <span role='img' aria-label='Rocket'>
          🚀
        </span>
        <button onClick={uncopyCode}>&times;</button>
      </animated.div>
    </div>
  )
}

export default ShowCode
