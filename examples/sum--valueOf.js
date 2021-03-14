// valueOf

// valueOf is used on all crocks Monoids as a means of extraction. While the
//extraction is available, types that implement valueOf are not necessarily
//a Comonad. This function is used primarily for convenience for some of the
//helper functions that ship with crocks. Calling valueOf on a Sum instance
//will result in the underlying Number.

// Sum ~> () -> Number

import log from "./log";
import Sum from 'crocks/Sum'

Sum(4)
  .valueOf()
//=> 4

Sum.empty()
  .valueOf()
//=> 0

Sum(34)
  .concat(Sum(21))
  .valueOf()
//=> 55