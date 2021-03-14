// valueOf

// valueOf is used as a means of extraction. This function is used primarily for
//convenience for some of the helper functions that ship with crocks.
//Calling valueOf on a Const instance will result in the underlying left value
//of the Product type.

// Const c a ~> () -> c

import log from "./log";
import Const from 'crocks/Const'

const ArrayConst =
  Const(Array)

ArrayConst([ 33 ])
  .valueOf()
//=> [ 33 ]

ArrayConst([ 35 ])
  .concat(ArrayConst([ 20 ]))
  .valueOf()
//=> [ 35, 20 ]