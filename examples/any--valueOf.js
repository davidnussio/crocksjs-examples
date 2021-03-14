// valueOf

// valueOf is used on all crocks Monoids as a means of extraction. While the
//extraction is available, types that implement valueOf are not necessarily
//a Comonad. This function is used primarily for convenience for some of the
//helper functions that ship with crocks. Calling valueOf on an Any instance
//will result in the underlying Boolean value.

// Any ~> () -> Boolean

import log from "./log";
import Any from 'crocks/Any'

Any(0).valueOf()        //=> false
Any('string').valueOf() //=> true

//=> true
Any(45)
  .concat('')
  .valueOf()