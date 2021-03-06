import './src/SyncPromise.js';
import './src/expressional-error-control.js'; // DEP: SyncPromise.js
import './src/instanceof-types.js';
import './src/lists-extend-array.js';
import './src/promisive.js';
import './src/global-constructors.js';
import './src/global-constructors-fix.js'; // DEP: global-constructors.js
import './src/function-prototype/new.js';
import './src/function-prototype/rename.js';
import './src/async-function-prototype/limit.js'; // DEP: global-constructors.js
import './src/generator-function/toIterator.js'; // DEP: global-constructors.js
import './src/generator-prototype/toArray.js'; // DEP: global-constructors.js
import './src/generator-prototype/map.js'; // DEP: global-constructors.js
import './src/generator-prototype/forEach.js'; // DEP: global-constructors.js
import './src/async-generator-prototype/toArray.js'; // DEP: global-constructors.js
import './src/async-generator-prototype/mapAwait.js'; // DEP: global-constructors.js
import './src/async-generator-prototype/forEachAwait.js'; // DEP: global-constructors.js
import './src/async-generator-prototype/map.js'; // DEP: global-constructors.js
import './src/async-generator-prototype/forEach.js'; // DEP: global-constructors.js
import './src/string-prototype/matchGroup.js';
import './src/string-prototype/toXXXCase.js';
import './src/string-prototype/find-index.js';
import './src/bigint-prototype/toJSON.js';
import './src/array-prototype/forEach-fix.js';
import './src/array-prototype/forEachAwait.js';
import './src/array-prototype/mapAwait.js';
import './src/array-prototype/flatMapAwait.js';
import './src/array-prototype/convolute.js';
import './src/array-prototype/get-and-subArray.js';
import './src/array-prototype/set.js';
import './src/array-prototype/finding.js';
import './src/array-prototype/mapAndFilter.js';
import './src/array-prototype/implode-and-feed.js';
import './src/array-prototype/better-slice.js'; // DEP: array-prototype/finding.js
import './src/array-prototype/better-reduce.js';
import './src/array-prototype/better-entries.js';
import './src/array-prototype/popped-pushed-shifted-unshifted.js';
import './src/array-prototype/spliced.js';
import './src/array-prototype/reversed.js';
import './src/array-prototype/sorted.js';
import './src/array-prototype/shuffle-and-shuffled.js';
import './src/array-prototype/undup.js'; // DEP: object/equal.js
import './src/map-and-set/map-from-and-to-object.js';
import './src/map-and-set/better-modifications.js';
import './src/map-and-set/better-entries.js';
import './src/map-and-set/getOrSet.js'; // DEP:object/isPrimitive.js
import './src/map-and-set/put.js';
import './src/map-and-set/pop.js';
import './src/map-and-set/map.js';
import './src/map-and-set/flatMap.js';
import './src/map-and-set/reduce.js';
import './src/map-and-set/forEachAwait.js';
import './src/map-and-set/mapAwait.js';
import './src/map-and-set/flatMapAwait.js';
import './src/map-and-set/mapAndFilter.js'; // DEP: map-and-set/reduce.js
import './src/event-target-prototype/listener-control.js'; // DEP: map-and-set/getOrSet.js
import './src/object/isObject.js';
import './src/object/isPrimitive.js';
import './src/object/isPureObject.js'; // DEP:object/isObject.js
import './src/object/better-frozen.js'; // DEP:object/isObject.js
import './src/object/equal.js';
import './src/object/areSame.js'; // DEP: object/isPureObject.js
import './src/object/haveOwnProperty.js';
import './src/object/bePrototypeOf.js';
import './src/object/propertyBeEnumerable.js';
import './src/object/map.js';
import './src/object/get-and-set.js'; // DEP: object/haveOwnProperty.js, object/isObject.js
import './src/object/deeplyGet-and-deeplySet.js'; // DEP: object/haveOwnProperty.js
import './src/object/deeplyAssign.js'; // DEP: object/isObject.js map-and-set/getOrSet.js
import './src/function/isXXX.js';
import './src/generator/for.js'; // DEP: global-constructors.js
import './src/generator/range.js'; // DEP: generator/for.js
import './src/string/compare.js';
import './src/string/concat.js';
import './src/array/concat.js';
import './src/promise/binded.js';
import './src/promise/better-allSettled.js';
import './src/promise/any.js';
import './src/promise/try.js'; // DEP: SyncPromise.js
import './src/promise/make.js';
import './src/number.js';
import './src/math.js';
import './src/console.js';
import './src/types.js'; // DEP: function/isXXX.js
import './fp.js';
