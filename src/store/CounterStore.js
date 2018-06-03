import { observable, action,useStrict } from "mobx";

//useStrict(true)

export default class CountStore {
  @observable count = 0;

  @action increaseCounter() {
    this.count ++;
  }

  @action decreaseCounter() {
    this.count --;
  }
}