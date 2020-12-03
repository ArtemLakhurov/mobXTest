import {action, computed, makeObservable, observable} from 'mobx';

class Store {
  @observable count = 0;
  @observable word = '';
  @observable wordList = [];

  constructor() {
    makeObservable(this);
  }
  @action
  wordOnChange(value) {
    this.word = value;
  }
  @action
  resetWordList() {
    this.wordList = [];
  }
  @action
  addWord() {
    this.wordList.push(this.word);
  }
  @action
  increase() {
    this.count += 1;
  }
  @computed
  get comp() {
    return `${this.count}: ${this.word}`;
  }
}

export default new Store();
