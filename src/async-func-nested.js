'use strict';

async function asyncAnotherFunc() {
  return 5;
}

async function asyncFunc() {
  return asyncAnotherFunc();  
}

asyncFunc()
  .then(x => console.log(x));
