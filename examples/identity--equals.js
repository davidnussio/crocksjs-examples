// equals

// Used to compare the underlying values of two Identity instances for equality by
//value, equals takes any given argument and returns true if the passed
//arguments is an Identity with an underlying value equal to the underlying value
//of the Identity the method is being called on. If the passed argument is not
//an Identity or the underlying values are not equal, equals will return false.

// Identity a ~> b -> Boolean

import log from "./log";
import Identity from 'crocks/Identity'

import equals from 'crocks/pointfree/equals'

Identity(33)
  .equals(Identity(33))
//=> true

Identity(33)
  .equals(Identity('33'))
//=> false

// by value, not reference for most types
Identity({ a: 86, b: true })
  .equals(Identity({ a: 86, b: true }))
//=> true

equals(Identity(95), 95)
//=> false

equals(Identity([ 2, 3 ]), Identity([ 2, 3 ]))
//=> true