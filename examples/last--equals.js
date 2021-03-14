// equals

// Used to compare the underlying values of two Last instances for equality by
//value, equals takes any given argument and returns true if the passed argument
//is a Last with an underlying value equal to the underlying value of
//the Last the method is being called on. If the passed argument is not
//a Last or the underlying values are not equal, equals will return false.

// Last a ~> b -> Boolean

import log from "./log";
import Last from 'crocks/Last'

import Maybe from 'crocks/Maybe'

Last(33)
  .equals(Last(33))
//=> true

Last(42)
  .equals(Last(10))
//=> false

Last({ a: 5 })
  .equals({ a: 5 })
//=> false

Last(95)
  .equals(95)
//=> false

Last(95)
  .equals(Maybe.of(95))
//=> false