import { CSSProperties, RefObject, ReactElement } from 'react'

export type WrapperProps = {
  children: ReactElement
  style: CSSProperties
  visible:
    | ((instance: HTMLDivElement | null) => void)
    | RefObject<HTMLDivElement>
    | null
    | undefined
}

export type AnimateOnShowConfig = {
  infinite?: boolean
  onShow?: (showing: boolean) => void
  threshold?: number
  root: HTMLElement | null
  rootMargin: string
}
