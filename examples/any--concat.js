// concat

// concat is used to combine (2) Semigroups of the same type under an operation
//specified by the Semigroup. In the case of Any, it will combine the (2)
//using logical OR (disjunction).

// Any ~> Any -> Any

import log from "./log";
import Any from 'crocks/Any'

Any(true).concat(Any(true))   //=> Any true
Any(true).concat(Any(false))  //=> Any true
Any(false).concat(Any(true))  //=> Any true
Any(false).concat(Any(false)) //=> Any false