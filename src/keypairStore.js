import {
  makeAutoObservable,
  autorun,
  observable,
  action,
  computed,
} from 'mobx';
import { v4 } from 'uuid';
import pair from './pair';

class keypairStore {
  pairArray = [];

  constructor() {
    makeAutoObservable(this, {
      pairArray: observable,
      setPair: action,
      updatePair: action,
    });
  }

  setPair(keyVal, description, value) {
    console.log('key, description, value', keyVal.value, description, value);
    const newPair = new pair(v4(), '', '', '');
    console.log('newPair', newPair);
    this.pairArray.push(newPair);
    console.log('pairArray', this.pairArray);
  }

  deletePair(id) {
    this.pairArray = this.pairArray.filter((pair) => pair.id !== id);
  }

  updatePair(id, property, val) {
    this.pairArray = this.pairArray.map((pair) => {
      if (pair.id == id) {
        if (property == 'value') {
          pair.value = val;
        } else if (property == 'description') {
          pair.description = val;
        } else {
          pair.key = val;
        }
      }
      return pair;
    });
  }
}

export const keypairStoreInstance = new keypairStore();
