// empty

// empty provides the identity for the Monoid in that when the value it
//provides is concated to object other value, it will return the other value.
//In the case of Assign the result of empty is an empty Object. empty is
//available on both the Constructor and the Instance for convenience.

// Assign.empty :: () -> Assign

import log from "./log";
import Assign from 'crocks/Assign'

Assign.empty()
//=> Assign {}

Assign({})
  .concat(Assign.empty())
//=> Assign {}

Assign({ a: 1 })
  .concat(Assign.empty())
//=> Assign { a: 1 }