// empty

// empty provides the identity for the Monoid in that when the value it
//provides is concated to any other value, it will return the other value. In
//the case of Last the result of empty is undefined. empty is available
//on both the Constructor and the Instance for convenience.

// Last.empty :: () -> Last a

import log from "./log";
import Last from 'crocks/Last'

const { empty } = Last

empty()
//=> Last( Nothing )

Last(3)
  .concat(empty())
//=> Last( Just 3 )

empty()
  .concat(Last(3))
//=> Last( Just 3 )