// valueOf

// valueOf is used on all crocks Monoids as a means of extraction.
//While the extraction is available, types that implement valueOf are
//not necessarily a Comonad. This function is used primarily for convenience
//for some of the helper functions that ship with crocks. Calling valueOf on
//an Assign instance will result in the underlying Object.

// Assign ~> () -> Object

import log from "./log";
import Assign from 'crocks/Assign'

Assign({})
  .valueOf()
//=> {}

Assign({ a: 1 })
  .valueOf()
//=> { a: 1 }

Assign({ a: 1 })
  .concat({ b: 25 })
  .valueOf()
//=> { a: 1, b: 25 }