// equals

// Used to compare the underlying values of two Maybe instances for equality by
//value, equals takes any given argument and returns true if the passed
//arguments is a Maybe with an underlying value equal to the underlying value
//of the Maybe the method is being called on. If the passed argument is not
//a Maybe or the underlying values are not equal, equals will return false.

// Maybe a ~> b -> Boolean

import log from "./log";
import Maybe from 'crocks/Maybe'

import equals from 'crocks/pointfree/equals'

const { Nothing, Just } = Maybe

Just(33)
  .equals(Just(33))
//=> true

Nothing()
  .equals(Nothing())
//=> true

Nothing()
  .equals(Just(33))
//=> false

// by value, not reference for most types
Just({ a: 86, b: true })
  .equals(Just({ a: 86, b: true }))
//=> true

equals(Just(95), 95)
//=> false

equals(undefined, Nothing())
//=> false

equals(Just([ 2, 3 ]), Just([ 2, 3 ]))
//=> true