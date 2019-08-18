
/**
 * friendly instanceof for types.
 * 
 * expressions below are all true now.
 * 
 * '' instanceof String
 * 0 instanceof Number
 * Symbol('') instanceof Symbol
 * true instanceof Boolean
 * (x=> (x.__proto__= null, x))( {}, ) instanceof Object
 * (x=> (x.__proto__= null, x))( ()=> {}, ) instanceof Function
 * 
 * instanceof Array is the same as Array.isArray() now.
 */
{
	const hasInstance= Object[Symbol.hasInstance];
	function hasInstanceOfType( instance, ){
		return hasInstance.call( this, instance, ) || (typeof instance === this.name.toLowerCase() && instance !== null);
	};
	
	[ Object, String, Number, Symbol, Boolean, Function, ].forEach(
		constructor=> Reflect.defineProperty( constructor, Symbol.hasInstance, {
			value: hasInstanceOfType,
		}, ),
	);
	
	Reflect.defineProperty( Array, Symbol.hasInstance, {
		value: instance=> Array.isArray( instance, ),
	}, );
}