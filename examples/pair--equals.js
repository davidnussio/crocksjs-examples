// equals

// Used to compare the underlying values of two Pair instances for equality by
//value. equals takes any given argument and returns true if the passed
//arguments is a Pair with an underlying values both in the first and second are
//equal to the underlying values in the first and second  of the Maybe the
//method is being called on. If the passed argument is not a Maybe or the
//underlying values are not equal, equals will return false.

// Pair a b ~> c -> Boolean

import log from "./log";
import Pair from 'crocks/Pair'
import equals from 'crocks/pointfree/equals'

Pair({ num: 33 }, 'string')
  .equals(Pair({ num: 33 }, 'string'))
//=> true

Pair({ num: 33 }, 'string')
  .equals(Pair({ num: 10 }, 'string'))
//=> false

Pair({ num: 33 }, 'string')
  .equals(Pair({ num: 33 }, 'different'))
//=> false

equals(Pair([ 1, 2 ], ''), [ 1, 2 ])
//=> false