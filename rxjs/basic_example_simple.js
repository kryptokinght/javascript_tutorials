const { Observable } = require('rxjs');

const source = Observable.from([1, 2, 3, 4, 5]);
source.subscribe(
  value => console.log('Value: ', value),
  err => console.log('error: ', err),
  () => console.log('complete'),
);
