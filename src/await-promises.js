'use strict';

async function asyncFunc() {
  const value = await Promise.resolve(5);  // guarantees this line is completely finished before asyncFunc() is executed.
  return value + 1;
}

asyncFunc()
  .then(x => console.log(x))
  .catch(err => console.error(err));

module.exports = asyncFunc;
