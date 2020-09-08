import React, {
  useEffect,
  useState,
  useRef,
  FunctionComponent,
  CSSProperties,
  MutableRefObject
} from 'react'
import { WrapperProps, AnimateOnShowConfig } from './types'
import {
  useSpring,
  animated,
  UseSpringProps,
  AnimatedValue,
  ForwardedProps
} from 'react-spring'

const wrapper: FunctionComponent<WrapperProps> = ({
  children,
  style,
  visible
}) => (
  <div ref={visible}>
    <animated.div style={style}>{children}</animated.div>
  </div>
)

type Merge<A, B> = { [K in keyof A]: K extends keyof B ? B[K] : A[K] } & B
type OverwriteKeys<A, B> = { [K in keyof A]: K extends keyof B ? B[K] : A[K] }

function useAnimateOnShow<DS extends object>(
  from: UseSpringProps<Merge<DS, CSSProperties>>,
  to: UseSpringProps<Merge<DS, CSSProperties>>,
  config?: AnimateOnShowConfig
): [
  FunctionComponent<WrapperProps>,
  MutableRefObject<HTMLElement | undefined>,
  AnimatedValue<ForwardedProps<OverwriteKeys<DS, CSSProperties>>>
] {
  const ref = useRef<HTMLElement>()
  const [visible, setVisible] = useState(false)
  const props = useSpring(visible ? to : from)

  useEffect(() => {
    const handleVisible = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      if (entries.length > 0) {
        const entry = entries[0]

        if (config?.infinite) {
          setVisible(entry.isIntersecting)
        } else {
          if (entry.intersectionRatio > 0) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        }

        if (config?.onShow) {
          config.onShow(entry.isIntersecting)
        }
      }
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }

    const observer = new IntersectionObserver(handleVisible, options)

    if (ref && ref.current) {
      observer.observe(ref.current)
    }

    return function cleanup() {}
  }, [ref, config?.infinite])

  return [wrapper, ref, props]
}

export default useAnimateOnShow
