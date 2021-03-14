// mapAll

// While undefined allows for the rightmost portion of a given n-Tuple to be
//mapped, mapAll provides a means to map all values at once, independently of
//each other. A Tuple of n size requires n number of functions in the same
//left to right order as their respective values. mapAll returns a
//new n-Tuple of the same size containing the results of the provided mapping
//functions.

// 1-Tuple a ~> (a -> b) -> 1-Tuple b
2-Tuple a b ~> (a -> c) -> (b -> d) -> 2-Tuple c d
...

import log from "./log";
import Tuple from 'crocks/Tuple'
import objOf from 'crocks/helpers/objOf'

// Triple :: 3-Tuple
const Triple =
  Tuple(3)

// toUpper :: String -> String
const toUpper =
  x => x.toUpperCase()

// negate :: a -> Boolean
const negate =
  x => !x

Triple('little', false, 94)
  .mapAll(toUpper, negate, objOf('a'))
//=> 3-Tuple( "LITTLE", true, { a: 94 } )