'use strict';

let map = require('map-iterator');

module.exports = sortByIterator;

function* sortByIterator(xs, fn) {
  let result = [];
  let index = 0;

  for (let x of xs) {
    result.push({
      value: x,
      index: index,
      criteria: fn(x, index++)
    })
  };

  let sorted = result.sort(function(left, right){
    let a = left.criteria;
    let b = right.criteria;
    if (a !== b) {
      if (a > b || a === void 0) return 1;
      if (a < b || b === void 0) return -1;
    }
    return left.index - right.index;
  });

  // only two intermediate array created, yay!
  // can we do better?
  for (let i = 0, l = sorted.length; i < l; i++) {
    yield sorted[i].value;
  }
}
