import { test, } from '../Robberfly.js';
import '../../src/map-and-set/forEachAwait.js';

test( '{Map}.forEachAwait', async ( { assertBe, assertAs, assertInstanceOf, assertRun, }, )=> {
	const map= new Map( [ [ 'foo', 3, ], [ 'bar', 1, ], ], );
	const runLoop= assertRun();
	let index= -1;
	
	const result= map.forEachAwait( async ( item, key, theMap, )=> {
		await new Promise( resolve=> void setTimeout( resolve, item, ), );
		
		runLoop.run();
		
		if( ++index === 0 )
		{
			assertBe( item, 3, );
			assertBe( key, 'foo', );
			assertBe( theMap, map, );
		}
		else
		{
			assertBe( item, 1, );
			assertBe( key, 'bar', );
			assertBe( theMap, map, );
		}
	}, );
	
	assertInstanceOf( result, Promise, );
	
	await result;
	
	runLoop.assert( 2, );
}, );

test( '{Set}.forEachAwait', async ( { assertBe, assertAs, assertInstanceOf, assertRun, }, )=> {
	const set= new Set( [ 3, 1, ], );
	const runLoop= assertRun();
	let index= -1;
	
	const result= set.forEachAwait( async ( item, key, theSet, )=> {
		await new Promise( resolve=> void setTimeout( resolve, item, ), );
		
		runLoop.run();
		
		if( ++index === 0 )
		{
			assertBe( item, 3, );
			assertBe( key, 3, );
			assertBe( theSet, set, );
		}
		else
		{
			assertBe( item, 1, );
			assertBe( key, 1, );
			assertBe( theSet, set, );
		}
	}, );
	
	assertInstanceOf( result, Promise, );
	
	await result;
	
	runLoop.assert( 2, );
}, );
