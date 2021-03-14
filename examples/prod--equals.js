// equals

// Used to compare the underlying values of (2) Prod instances for equality by
//value, equals takes any given argument and returns true if the passed argument
//is a Prod with an underlying value equal to the underlying value of
//the Prod the method is being called on. If the passed argument is not
//a Prod or the underlying values are not equal, equals will return false.

// Prod a ~> b -> Boolean

import log from "./log";
import Prod from 'crocks/Prod'

Prod(5)
  .equals(Prod(5))
//=> true

Prod(25)
  .equals(Prod(31))
//=> false