import './function/isXXX.js';
import './global-constructors.js';

const betterType= ( value, type, )=>
	value === null? 'null':
	type === 'function'? (
		value.constructor === AsyncFunction? (
			Function.isClass( value, )? 'async:class':
			'async:function'
		):
		value.constructor === GeneratorFunction? 'generator:function':
		value.constructor === AsyncGeneratorFunction? 'async:generator:function':
		Function.isClass( value, )? 'class':
		'function'
	):
	type === 'object'? (
		value instanceof Boolean? 'boolean:object':
		value instanceof String? 'string:object':
		value instanceof Number? 'number:object':
		value instanceof BigInt? 'bigint:object':
		value instanceof Symbol? 'symbol:object':
		value instanceof RegExp? 'regexp':
		value instanceof Promise? 'promise':
		Array.isArray( value, )? 'array':
		value instanceof Map? 'map':
		value instanceof Set? 'set':
		value instanceof WeakMap? 'weakmap':
		value instanceof WeakSet? 'weakset':
		globalThis.WeakRef && value instanceof WeakRef? 'weakref':
		value.constructor.constructor? (
			value.constructor.constructor === AsyncFunction? 'async:object':
			value.constructor.constructor === GeneratorFunction? 'generator':
			value.constructor.constructor === AsyncGeneratorFunction? 'async:generator':
			'object'
		):
		'object'
	):
	type
;

/**
 * function instead of typeof
 * 
 * "array" for arraies
 * "null" for nulls
 * "class" for class
 */
Reflect.defineProperty( globalThis, 'getType', { value: value=> betterType( value, typeof value, ), }, );
