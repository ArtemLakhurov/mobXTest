const {observable, action, makeObservable} = require('mobx');

class EmailStore {
  @observable email = '';

  constructor() {
    makeObservable(this);
  }

  @action
  emailOnChange(value) {
    this.email = value;
  }
}

export default new EmailStore();
