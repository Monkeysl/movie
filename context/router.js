import { createContext } from 'react'

const RouteContext = createContext({})

const { Provider, Consumer } = RouteContext

export {
  RouteContext as default,
  Provider,
  Consumer
}