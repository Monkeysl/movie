import { createContext } from 'react'

const RouteContext = createContext(null)

const { Provider, Consumer } = RouteContext

export {
  RouteContext as default,
  Provider,
  Consumer
}