// concat

// concat is used to combine (2) Semigroups of the same type under an
//operation specified by the Semigroup. In the case of Min, it will result
//in the smallest of the (2) Numbers.

// Min ~> Min -> Min

import log from "./log";
import Min from 'crocks/Min'

Min(50)
  .concat(Min(24))
//=> Min 24

Min(-120)
  .concat(Min(-50))
//=> Min -120

Min.empty()
  .concat(Min(-Infinity))
//=> Min -Infinity