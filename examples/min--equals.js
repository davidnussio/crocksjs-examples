// equals

// Used to compare the underlying values of (2) Min instances for equality by
//value, equals takes any given argument and returns true if the passed
//argument is a Min with an underlying value equal to the underlying value of
//the Min the method is being called on. If the passed argument is not
//a Min or the underlying values are not equal, equals will return false.

// Min a ~> b -> Boolean

import log from "./log";
import Min from 'crocks/Min'

Min(5)
  .equals(Min(5))
//=> true

Min(25)
  .equals(Min(31))
//=> false