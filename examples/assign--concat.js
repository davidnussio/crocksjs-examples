// concat

// concat is used to combine (2) Semigroups of the same type under an
//operation specified by the Semigroup. In the case of Assign, it will
//combine (2) objects, overwriting the first Object's previous values with
//the values of the second Object.

// Assign ~> Assign -> Assign

import log from "./log";
import Assign from 'crocks/Assign'

Assign({})
  .concat(Assign({}))
//=> Assign {}

Assign({ a: 1 })
  .concat(Assign({ b: 2 }))
//=> Assign { a: 1, b: 2 }

Assign({ a: 1, b: 2 })
  .concat(Assign({ a: 3, b: 4 }))
//=> Assign { a: 3, b: 4 }

Assign({ b: 4 })
  .concat(Assign({ a: 1 }))
//=> Assign { b: 4, a: 1 }