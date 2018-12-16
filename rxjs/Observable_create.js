const { Observable } = require('rxjs');

const numbers = [1, 2, 3, 4, 45, 90];

const source = Observable.create((observer) => {
  numbers.forEach((n) => {
    observer.next(n);
  });
  observer.complete();
});

source.subscribe(
  value => console.log('Value: ', value),
  err => console.log('error: ', err),
  () => console.log('complete'),
);
