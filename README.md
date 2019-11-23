BetterJS
================================

JS is a pretty good language, but it can be better. 

This library does not export anything, but modifies build-in APIs. 

As a build-in APIs modifier, this module should be imported at the first. 
To be used with other build-in APIs modifiers is not recommanded. 

## Usage

To use full BetterJS, just import the index.js: 
```javascript
import 'https://better-js.fenz.land/index.js';

const anchor= '<a href="https://better-js.fenz.land/"></a>';

const href= anchor.matchGroup( /href="([^"]*)"/, 1, );
```

Or you can only use specific feature like below. 
```javascript
import 'https://better-js.fenz.land/src/promisive.js';

await timeout( 250, );
```

There are some breaking changes that may trouble you, you can use the breaking-free version. 
```javascript
import 'https://better-js.fenz.land/breaking-free.js';

const caches= new Map();

const data= caches.getOrSet( 'key', ()=> fetch( 'key', ), );
```

Some parts of BetterJS may depend on others. 
So when you import one feature, another feature may available too. 
But a breaking-free feature will never depend on a breaking feature.  

## Features

### on globalThis

* [SyncPromise](./docs/SyncPromise.md)
* [throws and tries](./docs/expressional-error-control.md)
* [global then, promisive timeout, nextFrame and window onload](./docs/promisive.md)
* [lists extend array](./docs/lists-extend-array.md) (breaking)
* [accessible AsyncFunction, GeneratorFunction and AsyncGeneratorFunction](./docs/global-constructors.md)
* [better types](./docs/types.md)

### on types

* [better instanceof](./docs/instanceof-types.md) (breaking)

#### String

* [matchGroup](./docs/string-prototype/matchGroup.md)
* [toCamelCase, toFlagCase, toSnakeCase and toBarbecueCase](./docs/string-prototype/toXXXCase.md)
* [better index finding](./docs/find-index.md)
* [String.compare](./docs/string/compare.md)

#### Number

* [Number.isInfinite](./docs/number/isInfinite.md)
* [Number.equal](./docs/number/equal.md)

#### Object

* [Object.isObject](./docs/object/isObject.md)
* [Object.isPureObject](./docs/object/isPureObject.md)
* [Object.areSame](./docs/object/areSame.md)
* [Object.deeplyGet and Object.deeplySet](./docs/object/deeplyGet-and-deeplySet.md)
* [Object.deeplyAssign](./docs/object/deeplyAssign.md)
* [Object.haveOwnProperty, Object.bePrototypeOf, Object.propertyBeEnumerable](./docs/object/staticize.md)

#### Function

* [Function.isFunction and Function.isClass](./docs/function/isFunction-and-isClass.md)
* [Function.isAsync](./docs/function/isAsync.md)
* [AsyncFunction.limit](./docs/async-function-prototype/limit.md)

* [Function.pipe and Function.compose](./docs/fp/compose.md)
* [curry and yrruc](./docs/fp/curry.md)

#### Promise

* [Promise.any](./docs/promise/any.md)
* [Promise.try](./docs/promise/try.md)
* [Promise.make](./docs/promise/make.md)

#### Array

* [better forEach](./docs/array-prototype/forEach-fix.md) (breaking)
* [sequentially async iterators](./docs/array-prototype/sequentially-async-iterators.md)
* [get and set](./docs/array-prototype/get-and-set.md)
* [subArray](./docs/array-prototype/subArray.md)
* [findLast and findLastIndex](./docs/array-prototype/find-last.md)
* [better index findings](./docs/find-index.md)
* [mapAndFilter](./docs/array-prototype/mapAndFilter.md)
* [implode and feed](./docs/array-prototype/implode-and-feed.md)
* [better reduce](./docs/array-prototype/better-reduce.md) (breaking)
* [shuffle](./docs/array-prototype/shuffle.md)
* [non-modifying methods](./docs/array-prototype/XXXed.md)

## Why BetterJS

The regular way to make JavaScript better is to make proposals to the TC39. But it's slow and conservative. 
There is another way, which is token by Prototype.js and JQuery, to build a better environment with a library, 
to make examples for the wold. Maybe the standard will absorb your ideas (and often make it better), 
like querySelector from JQuery and a lot of prototype methods form Prototype.js. 

You may think that BetterJS is just another Prototype.js. That's true, we take similar way and do similar things. 
But BetterJS is the more modern one, and only add feature in standard compatible way. 
When standard update in tomorrow, we can follow up. We also make breaking changes, 
but in a sustainable way too. The main version will keep these changes tomorrow. 

We are not always follow the standard, but make changes in main version. 
Because even standard makes bad designs or mistakes, and they often unable to fix them, like `typeof null === 'object'`. 
If we can make it better beyond the standard can do, why not? 

Historical burdens will not exist in every project. We have main version for brand new modern projects, 
and breaking-free version for historical projects. What's more, you can pick out features you like, and make a DIY version. 
Even if you just read the code and get some ideas, our works are worthful. 

Let's make JavaScript better, let's make the world better. 
