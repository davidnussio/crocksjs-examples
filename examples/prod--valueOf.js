// valueOf

// valueOf is used on all crocks Monoids as a means of extraction. While
//the extraction is available, types that implement valueOf are not necessarily
//a Comonad. This function is used primarily for convenience for some of the
//helper functions that ship with crocks. Calling valueOf on 
//a Prod instance will result in the underlying Number.

// Prod ~> () -> Number

import log from "./log";
import Prod from 'crocks/Prod'

Prod.empty()
  .valueOf()
//=> 1

Prod(4)
  .valueOf()
//=> 4

Prod(34)
  .concat(Prod(21))
  .valueOf()
//=> 714