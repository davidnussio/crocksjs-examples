// empty

// empty provides the identity for the Monoid in that when the value it
//provides is concated to any other value, it will return the other value. In
//the case of Max the result of empty is -Infinity. empty is available on
//both the Constructor and the Instance for convenience.

// Max.empty :: () -> Max

import log from "./log";
import Max from 'crocks/Max'

Max.empty()
//=> Max -Infinity

Max.empty()
  .concat(Max.empty())
//=> Max -Infinity

Max(32)
  .concat(Max.empty())
//=> Max 32

Max.empty()
  .concat(Max(34))
//=> Max 34