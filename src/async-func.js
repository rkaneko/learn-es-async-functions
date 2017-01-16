'use strict';

async function asyncFunc() {
  console.log(`asyncFunc()`);
  return `abc`;
}

asyncFunc()
  .then(x => console.log(`Resolved: ${x}`))
  .catch(err => console.error(err));

console.log('main');

// output
// asyncFunc()
// main
// Resolved: abc
