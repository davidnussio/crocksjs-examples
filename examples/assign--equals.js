// equals

// Used to compare the underlying values of (2) Assign instances for equality by
//value, equals takes any given argument and returns true if the passed argument
//is an Assign with an underlying value equal to the underlying value of
//the Assign the method is being called on. If the passed argument is not
//an Assign or the underlying values are not equal, equals will return false.

// Assign a ~> b -> Boolean

import log from "./log";
import Assign from 'crocks/Assign'

Assign({ a: 5 })
  .equals(Assign({ a: 5 }))
//=> true

Assign({ a: 5 })
  .equals(Assign({ a: 15 }))
//=> false