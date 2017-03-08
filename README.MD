# smart-table-operators

[![CircleCI](https://circleci.com/gh/smart-table/smart-table-operators.svg?style=svg)](https://circleci.com/gh/smart-table/smart-table-operators)

A basic set of functional operators (or higher order function) for nodejs and browsers. Used internally in [smart-table]('https://github.com/smart-table/smart-table-core') but can be useful to anyone. However if you need something more elaborated you'll probably be more interested in
[Ramda](https://github.com/ramda/ramda) or [lodash](https://github.com/lodash/lodash)

## Installation

### npm

``npm install smart-table-operators --save``

### yarn

``yarn add smart-table-operators``

## Usage

### swap

Swap arguments, returning a new function.

```Javascript
import {swap} from 'smart-table-operators';

const substract = (a,b) => a-b;
const f = swap(substract);
substract(4,2);
// > 2
f(4,2);
// > -2
```

### compose

compose function returning a new function.

```Javascript
import {compose} from 'smart-table-operators';

const addTwo = (a) => a + 2;
const multiplyByThree = (a) => a * 3;

const addTwoTimesThree = compose(addTow, multiplyByThree);

addTwoTimesThree(4);
// > 18
```

### tap

call side effects, returning a new function (which returns the initial argument).

```Javascript
import {tap} from 'smart-table-operators';

const log = tap((a)=>console.log(a));
const four = log(4);
// > 4
console.log(four)
// > 4
```

### curry

Takes a function and return a new function. If this new function is called whereas the argument length is not equal to the arity, returns a new function.

```Javascript
import {curry} from 'smart-table-operators'
const curriedAdd = curry((a,b) => a + b);

curriedAdd(2,3);
// > 5
const addTwo = curriedAdd(2);

addTow(3);
// > 5
```

You can specify the expected arity (useful when passing default value)

```Javascript
import {curry} from 'smart-table-operators';

const add = function (a, b=2){return a+b;};
const curriedAdd = curry(add,2);

const addThree = curriedAdd(3);
addThree();
// > 5
```

## Contributing

### test

``npm test``

or

``yarn test``

### issues

Only **bugs** coming with a **running example**
