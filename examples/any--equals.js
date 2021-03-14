// equals

// Used to compare the underlying values of (2) Any instances for equality by
//value, equals  takes any given argument and returns true if the passed argument
//is an Any with an underlying value equal to the underlying value of
//the Any the method is being called on. If the passed argument is not
//an Any or the underlying values are not equal, equals will return false.

// Any a ~> b -> Boolean

import log from "./log";
import Any from 'crocks/Any'

Any(true)
  .equals(Any(true))
//=> true

Any(true)
  .equals(Any(false))
//=> false