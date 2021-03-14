// valueOf

// valueOf is used on all crocks Monoids as a means of extraction. While the
//extraction is available, types that implement valueOf are not necessarily
//a Comonad. This function is used primarily for convenience for some of the
//helper functions that ship with crocks. Calling valueOf on a Max instance
//will result in the underlying Number.

// Max ~> () -> Number

import log from "./log";
import Max from 'crocks/Max'

Max(4)
  .valueOf()
//=> 4

Max.empty()
  .valueOf()
//=> -Infinity

Max(34)
  .concat(Max(21))
  .valueOf()
//=> 34