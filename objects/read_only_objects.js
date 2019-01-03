/* eslint-disable strict */

'use strict';

const obj = { 'modifiable': 'Can be written' };

Object.defineProperty(obj, 'readOnly', {
    enumerable: true,
    configurable: false,
    writable: false,
    value: 'Can be only read'
});

obj.readOnly = 'written!'; // this will result into an error because of 'use strict'
console.log(obj);
