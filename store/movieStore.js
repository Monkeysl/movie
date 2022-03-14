import { useLocalStore } from 'mobx-react-lite'

const store = useLocalState(() => ({
  count: 10
}))

export default store