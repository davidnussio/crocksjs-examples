// valueOf

// valueOf is used as a means of extraction. This function is used primarily for
//convenience for some of the helper functions that ship with crocks.
//Calling valueOf on an Identity instance will return the value being
//contained.

// Identity a ~> () -> a

import log from "./log";
import Identity from 'crocks/Identity'

Identity(42)
  .valueOf()
//=> 42

Identity([ 10, 20 ])
  .concat(Identity([ 30, 40 ]))
  .valueOf()
//=>[ 10, 20, 30, 40 ]