// empty

// empty provides the identity for the Monoid in that when the value it
//provides is concated to any other value, it will return the other value. In
//the case of Any the result of empty is false. empty is available on both
//the Constructor and the Instance for convenience.

// Any.empty :: () -> Any

import log from "./log";
import Any from 'crocks/Any'

Any.empty() //=> Any false

Any(true).concat(Any.empty())   //=> Any true
Any(false).concat(Any.empty())  //=> Any false