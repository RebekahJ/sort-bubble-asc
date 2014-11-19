sort-bubble-asc
===============

[![Build Status][travis-image]][travis-url]

> Sort a numeric into ascending order using a bubble sort method.

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

For an array containing n elements, after performing the last swap, algorithm performs n further comparisons before concluding that array is sorted.

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


[travis-image]: http://img.shields.io/travis/compute-io/lmidmean/master.svg
[travis-url]: https://travis-ci.org/compute-io/lmidmean

[coveralls-image]: https://img.shields.io/coveralls/compute-io/lmidmean/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/lmidmean?branch=master