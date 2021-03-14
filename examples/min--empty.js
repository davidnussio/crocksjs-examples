// empty

// empty provides the identity for the Monoid in that when the value it
//provides is concated to any other value, it will return the other value. In
//the case of Min the result of empty is Infinity. empty is available on
//both the Constructor and the Instance for convenience.

// Min.empty :: () -> Min

import log from "./log";
import Min from 'crocks/Min'

Min.empty()
//=> Min Infinity

Min.empty()
  .concat(Min.empty())
//=> Min Infinity

Min(32)
  .concat(Min.empty())
//=> Min 32

Min.empty()
  .concat(Min(34))
//=> Min 34