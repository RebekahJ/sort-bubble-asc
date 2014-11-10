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
	if ( arr.length < 2 ) {
		throw new TypeError( 'bubble()::invalid input argument. Array must contain at least 2 elements.' );
	}

	var len = arr.length,
		temp = 0,
		count = 0;

	while ( count < len ) {
		console.log("A pass...");

		for(var i = 0; i < len-1; i++) {
			// Count elements checked since last swap:
			count++

			// If passed each element once with no further swaps, FINISHED!
			if ( count >= len ) { 
				console.log("At array element:" + i );
				console.log("Returned to position of last swap. Done!");
				break; 
			}

			// Check and swap pairs:
			if ( arr[i+1] < arr[i] ) {

				// Swap elements:
				temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;

				// Reset count:
				count = 0;
			}
		} 

	}

	return;

} // end FUNCTION bubble()

// EXPORTS //

module.exports = bubble;

