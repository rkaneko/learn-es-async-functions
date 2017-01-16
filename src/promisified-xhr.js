'use strict';

// require('babel-polyfill');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function httpGet(url) {
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function() {
        if (xhr.status === 200) {
          console.dir('hoge');
          resolve(xhr.response);
        } else {
          reject(new Error(xhr.statusText));
        }
      };
      xhr.onerror = function() {
        reject(new Error(
          `XMLHttpRequest Error: ${xhr.statusText}`
        ));
      };
      xhr.send();
    }
  );
}

function main() {
  httpGet(`http://localhost:3001/apis/example1`)
    .then(response => console.dir(response))
    .catch(err => console.error(err));
}

(() => {
  main()
})();
