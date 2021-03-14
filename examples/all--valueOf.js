// valueOf

// valueOf is used on all crocks Monoids as a means of extraction. While the
//extraction is available, types that implement valueOf are not necessarily
//a Comonad. This function is used primarily for convenience for some of the
//helper functions that ship with crocks. Calling valueOf on an All instance
//will result in the underlying Boolean value.

// All ~> () -> Boolean

import log from "./log";
import All from 'crocks/All'

All(0).valueOf()          //=> false
All('string').valueOf() //=> true

//=> false
All(true)
  .concat('')
  .valueOf()