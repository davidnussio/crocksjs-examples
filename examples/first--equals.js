// equals

// Used to compare the underlying values of two First instances for equality by
//value, equals takes any given argument and returns true if the passed
//arguments is a First with an underlying value equal to the underlying value
//of the First the method is being called on. If the passed argument is not
//a First or the underlying values are not equal, equals will return false.

// First a ~> b -> Boolean

import log from "./log";
import First from 'crocks/First'

import Maybe from 'crocks/Maybe'

First(33)
  .equals(First(33))
//=> true

First(42)
  .equals(First(10))
//=> false

First({ a: 5 })
  .equals({ a: 5 })
//=> false

First(95)
  .equals(95)
//=> false

First(95)
  .equals(Maybe.of(95))
//=> false