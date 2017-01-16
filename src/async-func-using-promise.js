'use strict';

async function asyncResolve() {
  return Promise.resolve(123);
}

asyncResolve()
  .then(x => console.log(x));

async function asyncReject() {
  throw new Error('rejected');
}

asyncReject()
  .catch(err => console.error(err.message));

console.log('main');
