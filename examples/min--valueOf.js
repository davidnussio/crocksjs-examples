// valueOf

// valueOf is used on all crocks Monoids as a means of extraction. While the
//extraction is available, types that implement valueOf are not necessarily
//a Comonad. This function is used primarily for convenience for some of the
//helper functions that ship with crocks. Calling valueOf on a Min instance
//will result in the underlying Number.

// Min ~> () -> Number

import log from "./log";
import Min from 'crocks/Min'

Min(33)
  .valueOf()
//=> 33

Min.empty()
  .valueOf()
//=> Infinity

Min(35)
  .concat(Min(20))
  .valueOf()
//=> 20