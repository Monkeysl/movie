import { useLocalObservable } from 'mobx-react-lite'

const store = useLocalObservable(() => ({
  count: 10
}))

export default store