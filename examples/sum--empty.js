// empty

// empty provides the identity for the Monoid in that when the value it
//provides is concated to any other value, it will return the other value. In
//the case of Sum the result of empty is 0. empty is available on both
//the Constructor and the Instance for convenience.

// Sum.empty :: () -> Sum

import log from "./log";
import Sum from 'crocks/Sum'

Sum.empty()
//=> Sum 0

Sum.empty()
  .concat(Sum.empty())
//=> Sum 0

Sum(4)
  .concat(Sum.empty())
//=> Sum 4

Sum.empty()
  .concat(Sum(4))
//=> Sum 4