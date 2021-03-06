import { test, } from '../Robberfly.js';
import '../../src/array-prototype/better-entries.js';

test( 'better {Set}.entries', async ( { assertTo, assertAs, }, )=> {
	const foo= [ 'foo', 'bar', ];
	
	const entries= foo.entries();
	
	assertTo( Array.isArray( entries, ), );
	assertAs( entries, [ [ 0, 'foo', ], [ 1, 'bar', ], ], );
}, );

test( 'better {Set}.keys', async ( { assertTo, assertAs, }, )=> {
	const foo= [ 'foo', 'bar', ];
	
	const keys= foo.keys();
	
	assertTo( Array.isArray( keys, ), );
	assertAs( keys, [ 0, 1, ], );
}, );

test( 'better {Set}.values', async ( { assertTo, assertAs, }, )=> {
	const foo= [ 'foo', 'bar', ];
	
	const values= foo.values();
	
	assertTo( Array.isArray( values, ), );
	assertAs( values, [ 'foo', 'bar', ], );
}, );
