'use strict';

var bubble = require( './../lib' );

var data = new Array( 3 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random()*100 );
}
//var data = [ 15, 57, 1, 67, 51 ]

console.log("Pre-sort:")

for ( var i = 0; i < data.length; i++ ) {
	console.log( data[i] );
}

bubble( data );

console.log("Post-sort:")

for ( var i = 0; i < data.length; i++ ) {
	console.log( data[i] );
}


