/* eslint-disable class-methods-use-this */
const { Observable } = require('rxjs');

const arr = [1, 2, 3, 4];
const source = Observable.from(arr);

class MyObserver {
  next(value) {
    console.log('Value: ', value);
  }

  error(err) {
    console.log(err);
  }

  complete() {
    console.log('Complete');
  }
}

source.subscribe(new MyObserver());
