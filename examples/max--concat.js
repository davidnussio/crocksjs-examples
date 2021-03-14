// concat

// concat is used to combine (2) Semigroups of the same type under an
//operation specified by the Semigroup. In the case of Max, it will result
//in the largest of the (2) Numbers.

// Max ~> Max -> Max

import log from "./log";
import Max from 'crocks/Max'

Max(23)
  .concat(Max(13))
//=> Max 23

Max(-23)
  .concat(Max(-32))
//=> Max -23

Max.empty()
  .concat(Max(Infinity))
//=> Max Infinity