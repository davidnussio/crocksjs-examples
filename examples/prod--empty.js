// empty

// empty provides the identity for the Monoid in that when the value it
//provides is concated to object other value, it will return the other value.
//In the case of Prod the result of empty is 1. empty is available on
//both the Constructor and the Instance for convenience.

// Prod.empty :: () -> Prod

import log from "./log";
import Prod from 'crocks/Prod'

Prod.empty()
//=> Prod 1

Prod.empty()
  .concat(Prod.empty())
//=> Prod 1

Prod(4)
  .concat(Prod.empty())
//=> Prod 4

Prod.empty()
  .concat(Prod(4))
//=> Prod 4