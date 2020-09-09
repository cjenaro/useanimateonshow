# @cjenaro/useanimateonshow

> Animate react components as they appear on the viewport with react-spring

[![NPM](https://img.shields.io/npm/v/@cjenaro/useanimateonshow.svg)](https://www.npmjs.com/package/@cjenaro/useanimateonshow) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @cjenaro/useanimateonshow
```

# How to use the library

## Notes

- The library uses [React Spring](https://www.react-spring.io/) if you don't know how to use it refer to their [docs](https://www.react-spring.io/docs)

- The library uses the [Intersection Observer API](https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API) to get when the element is showing on screen, if you want/need IE 11 support, you will need a{ [polyfill](https://github.com/w3c/IntersectionObserver)

## Installation

```bash
npm install @cjenaro/useanimateonshow
yarn add @cjenaro/useanimateonshow
```

## Usage

The useAnimateOnShow function takes in from and to objects that are just
as the react spring useSpring argument, you can configure duration and
spring config here too.

```tsx
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
```

Lastly, there is a third argument with some optional configuration

```tsx
{
  ;`{ infinite: true, onShow: (showing: boolean) => console.log(showing) }`
}
```

Infinite means that once the element leaves the screen it will animate
out and then back in when it is shown again, there is also an optional
onShow function that receives wether the element is showing or not.

## License

MIT © [jenaro94](https://github.com/jenaro94)

```

```
