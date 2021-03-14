// empty

// empty provides the identity for the Monoid in that when the value it
//provides is concated to any other value, it will return the other value. In
//the case of First the result of empty is undefined. empty is
//available on both the Constructor and the Instance for convenience.

// First.empty :: () -> First a

import log from "./log";
import First from 'crocks/First'

const { empty } = First

First.empty()
//=> First( Nothing )

First(3)
  .concat(empty())
//=> First( Just 3 )

empty()
  .concat(First(3))
//=> First( Just 3 )