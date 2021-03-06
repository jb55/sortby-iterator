
# sortby-iterator

  sortBy for iterators

  Utilising iterators reduces the number of intermediate arrays that are created
  during the sort!

  [![Build Status](https://travis-ci.org/jb55/sortby-iterator.svg)](https://travis-ci.org/jb55/sortby-iterator)

## Installation

  Install with npm

    $ npm install sortby-iterator

## Example

```js
'use strict';

let sortBy = require('sortby-iterator');

function* numbers() {
  yield [1];
  yield [1, 4, 6];
  yield [1, 3];
}

let sorted = sortBy(numbers(), function(x) { return x.length; });

for (let x of sorted) {
  console.log(x);
}

// [1]
// [1, 3]
// [1, 4, 6]
```

## API

### sortBy(Iterator, Function(value) -> value)

ascending order, stable

returns: Iterator

## License

  The MIT License (MIT)

  Copyright (c) 2014 William Casarin

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
