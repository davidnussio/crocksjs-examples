// toArray

// toArray is a Natural Transformation from a given n-Tuple to a
//JavaScript Array. Any arguments applied to toArray will be ignored and will
//return an Array of n size, where n corresponds to the size of
//the n-Tuple. Each value will be in the same left to right position as the
//order defined by the n-Tuple

// 1-Tuple a ~> () -> [ a ]
2-Tuple a b ~> () -> [ a + b ]
3-Tuple a b c ~> () -> [ a + b + c ]
...

import log from "./log";
import Tuple from 'crocks/Tuple'

// Pair :: 2-Tuple
const Pair =
  Tuple(2)

// Quad :: 4-Tuple
const Quad =
  Tuple(4)

Pair(false, { a: false })
  .toArray()
//=> [ false, { a: false } ]

Quad([ 1, 3 ], [ 2, 4 ], 'name', 'Joe')
  .toArray()
//=> [ [ 1, 3 ], [ 2, 4 ], "name", "Joe" ]