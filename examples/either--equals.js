// equals

// Used to compare the underlying values of two Either instances for equality by
//value, equals takes any given argument and returns true if the passed
//arguments is a Either of the same instance with an underlying value equal to
//the underlying value of the Either the method is being called on. If the
//passed argument is not an Either of the same instance or the underlying values
//are not equal, equals will return false.

// Either c a ~> b -> Boolean

import log from "./log";
import Either from 'crocks/Either'
import equals from 'crocks/pointfree/equals'

const { Left, Right } = Either

Right(null)
  .equals(Right(null))
//=> true

Left('happy')
  .equals(Left('happy'))
//=> true

Left('sad')
  .equals(Right('sad'))
//=> false

// by value, not reference for most types
Right([ 1, { a: 2 }, 'string' ])
  .equals(Right([ 1, { a: 2 }, 'string' ]))
//=> true

equals(Right('sad'), 'sad')
//=> false