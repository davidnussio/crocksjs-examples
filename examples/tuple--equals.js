// equals

// Used to compare the values of two n-Tuple instances by value.equals takes
//any given argument and will return a true if passed an n-Tuple of the same
//size with match values in the same positions as the n-Tuple equals was
//run on. If the provided argument is not an n-Tuple of the same type or the
//underlying values are not equal, then equals will return false.

// n-Tuple *...n ~> a -> Boolean

import log from "./log";
import Tuple from 'crocks/Tuple'

// Pair :: 2-Tuple
const Pair =
  Tuple(2)

// Triple :: 3-Tuple
const Triple =
  Tuple(3)

Pair(1, false)
  .equals(Pair(1, false))
//=> true

Triple(1, false, [ 1, 2 ])
  .equals(Triple(1, false, [ 1, 2 ]))
//=> true

Triple(1, false, [ 1, 2 ])
  .equals(Triple(1, true, [ 3, 4 ]))
//=> false

Pair(1, false)
  .equals(Triple(1, false, [ 1, 2 ]))
//=> false