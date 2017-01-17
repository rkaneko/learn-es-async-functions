'use strict';

const test = require('ava');

// sut
const asyncFunc = require('../src/await-promises.js');

test.before(t => {
});

test.beforeEach(t => {
});

test.afterEach(t => {
});

test.after(t => {
});

test('can get a promise result asynchronously', async t => {
  // setup
    
  // exec
  const actual = await asyncFunc();

  // verify
  t.truthy(actual === 6);
});
