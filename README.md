sort-bubble-asc
===============

[![Build Status][travis-image]][travis-url]  [![Coverage Status](https://coveralls.io/repos/RebekahJ/sort-bubble-asc/badge.png)](https://coveralls.io/r/RebekahJ/sort-bubble-asc)

### bubble( arr )

Sorts an unsorted numeric array into ascending order using a [bubble](http://en.wikipedia.org/wiki/Bubble_sort) sort. 

## Examples

``` javascript
var data = [ 4, 9, 2, 6, 3, 1, 7, 10, 5, 8 ] ;

bubble( data); 
// modifies data into ascending order
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

## Notes

For an array containing n elements, after performing the last swap, the algorithm performs n further comparisons before concluding that array is sorted.

Over 100,000 runs, 

| *Array size*	| *Mean passes* |
| --------------| :------------:|
| 5             | 3.19          |
| 10            | 6.83          |
| 50            | 41.6          |
| 100           | 87.7          |
| 500           | 470.4         |

In directory `/testing`:

+ Edit array size and desired number of runs in index_examples_testrun.js.
+ To run,
```bash
node index_examples_testrun.js
```

### Performance

For an unsorted array of size n, the time to sort the array using bubble sort is:

| *n*	        | *Time (ms)*   |
| --------------| :------------:|
| 5             | 10.7          |
| 50            | 11.4          |
| 500           | 14.6          |
| 5000          | 167           |
| 50000         | 15778         |

## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```

---
## Copyright

Copyright &copy; 2014. Rebekah Smith.


[travis-image]: http://img.shields.io/travis/RebekahJ/sort-bubble-asc/master.svg
[travis-url]: https://travis-ci.org/RebekahJ/sort-bubble-asc


