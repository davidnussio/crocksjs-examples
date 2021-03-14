// equals

// Used to compare the underlying values of (2) Max instances for equality by
//value, equals takes any given argument and returns true if the passed
//argument is a Max with an underlying value equal to the underlying value of
//the Max the method is being called on. If the passed argument is not
//a Max or the underlying values are not equal, equals will return false.

// Max a ~> b -> Boolean

import log from "./log";
import Max from 'crocks/Max'

Max(5)
  .equals(Max(5))
//=> true

Max(25)
  .equals(Max(31))
//=> false