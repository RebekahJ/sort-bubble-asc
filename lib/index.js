/**
*
*	SORT: bubble
*
*
*	DESCRIPTION:
*		- Performs a bubble sort on an unsorted array of numeric values.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Rebekah Smith.
*
*
*	AUTHOR:
*		Rebekah Smith. rebekahjs17@gmail.com. 2014.
*
*/

'use strict';

// FUNCTIONS //

/**
* FUNCTION: bubble( arr )
*	Sorts array elements into ascending order.
*
* @param {Array} arr - numeric array
*
* Modifies input array arr
*/
function bubble( arr ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'bubble()::invalid input argument. Must provide an array.' );
	}

	var len = arr.length,
		temp = 0,
		count = 0;

	while ( count <= len ) {
		console.log("A pass...");

		for(var i = 0; i < len-1; i++) {
			// count elements checked since last swap
			count++

			// if passed all elements with no swaps, FINISHED!
			if ( count > len ) { 
				console.log("At array element:" + i );
				console.log("Passed each element without swap. Done!");
				break; 
			}

			// Check and swap pairs
			if ( arr[i+1] < arr[i] ) {

				// swap elements
				temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;

				// reset count
				count = 0;
			}
		} 

	}

	return;

} // end FUNCTION bubble()

// EXPORTS //

module.exports = bubble;

