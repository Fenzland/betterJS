
/**
 * then()
 * 
 * @usage
 *     await then();
 *     then( ()=> { what to do at next micro task }, );
 * 
 * @param time  (number)
 * @param value <any#value>
 * 
 * @return <any#value>
 */
Reflect.defineProperty( globalThis, 'then', {
	value: async ( onresolved=undefined, )=> Promise.resolve().then( onresolved, ),
}, );

/**
 * timeout()
 * 
 * @usage
 *     await timeout();
 *     await timeout( milliseconds, );
 *     timeout().then( ()=> { what to do at next macro task }, );
 *     timeout( x, ).then( ()=> { what to do after x milliseconds }, );
 * 
 * @param time  (number)
 * @param value <any#value>
 * 
 * @return <any#value>
 */
Reflect.defineProperty( globalThis, 'timeout', {
	value: async ( time, value, )=>
		new Promise( resolve=> void setTimeout( ()=> void resolve( value, ), time, ), )
	,
}, );

/**
 * nextFrame()
 * 
 * @usage
 *     await nextFrame();
 *     nextFrame().then( ()=> { what to do at next animation frame }, );
 * 
 * @param value <any#value>
 * 
 * @return <any#value>
 */
Reflect.defineProperty( globalThis, 'nextFrame', { value:
	globalThis.requestAnimationFrame?
		async value=> new Promise( resolve=> void requestAnimationFrame( ()=> resolve( value, ), ), ):
	async value=> timeout( 1000/60, value, )
, }, );

/**
 * window.loaded
 *  a window will only load once, so it should be a promise rather than an event
 * 
 * @usage
 *     await window.loaded;
 *     window.loaded.then( ()=> { what to do after the window has loaded }, );
 * 
 * @return {Event}  the event of window.onload
 */
if( globalThis.window )
	Reflect.defineProperty( window, 'loaded', {
		value: new Promise( resolve=> void window.addEventListener( 'load', resolve, ), ),
	}, );

/**
 * window.beforeunloaded
 *  a window will only beforeunload once, so it should be a promise rather than an event
 * 
 * @usage
 *     await window.beforeunloaded;
 *     window.beforeunloaded.then( ()=> { what to do after the window has beforeunloaded }, );
 * 
 * @return {Event}  the event of window.onbeforeunload
 */
if( globalThis.window )
	Reflect.defineProperty( window, 'beforeunloaded', {
		value: new Promise( resolve=> void window.addEventListener( 'beforeunload', resolve, ), ),
	}, );

/**
 * window.unloaded
 *  a window will only unload once, so it should be a promise rather than an event
 * 
 * @usage
 *     await window.unloaded;
 *     window.unloaded.then( ()=> { what to do after the window has unloaded }, );
 * 
 * @return {Event}  the event of window.onunload
 */
if( globalThis.window )
	Reflect.defineProperty( window, 'unloaded', {
		value: new Promise( resolve=> void window.addEventListener( 'unload', resolve, ), ),
	}, );
