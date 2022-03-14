import { observable, action, runInAction } from "mobx";

class Store {

  @observable
  list = []

  @action.bound
  async loadData() {
    let result = await fetch('https://baidu.com')
      .then(response => response.json())
      .then(result => {
        return result.value
      })

    runInAction(() => {
      this.list = result
    })
  }
}

export default new Store()
export { Store }