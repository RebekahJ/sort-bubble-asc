'use strict';

var bubble = require( './index_lib_testout.js' );

var meanpasses = 0,
	runs = 100000;

var data = new Array( 50 );

// Run bubble sort multiple times:
for ( var j = 0; j < runs; j++) {

	// generate new random array values
	for ( var i = 0; i < data.length; i++ ) {
		data[ i ] = Math.round( Math.random()*100 );
	}
	
	meanpasses += bubble( data ) / runs;
}

console.log ( meanpasses );