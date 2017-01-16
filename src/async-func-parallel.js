'use strict';

function asyncFunc1() {
  return Promise.resolve(1);
}

function asyncFunc2() {
  return Promise.resolve(2);
}

async function asyncFunc() {
  const [v1, v2] = await Promise.all([
    asyncFunc1(),
    asyncFunc2()
  ]);
  console.log(v1 + v2);
}

asyncFunc()
  .then();
