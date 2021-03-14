// equals

// Used to compare the underlying values of (2) Sum instances for equality by
//value, equals takes any given argument and returns true if the passed
//argument is a Sum with an underlying value equal to the underlying value of
//the Sum the method is being called on. If the passed argument is not
//a Sum or the underlying values are not equal, equals will return false.

// Sum a ~> b -> Boolean

import log from "./log";
import Sum from 'crocks/Sum'

Sum(5)
  .equals(Sum(5))
//=> true

Sum(25)
  .equals(Sum(31))
//=> false