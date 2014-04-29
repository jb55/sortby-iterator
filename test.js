'use strict';

let expect = require('expect.js')
let sort = require('./');

describe('sortby-iterator', function(){
  it('works', function(){
    function* numbers() {
      yield [1];
      yield [1, 2, 3];
      yield [1, 2];
    }

    let sorted = sort(numbers(), function(x) { return x.length; });

    expect(sorted.next().value).to.eql([1]);
    expect(sorted.next().value).to.eql([1, 2]);
    expect(sorted.next().value).to.eql([1, 2, 3]);
  });

  it('works with no items', function(){
    function* nil() { }

    let sorted = sort(nil(), function(x) { return x.length; });

    expect(sorted.next().done).to.be(true);
  });
});

