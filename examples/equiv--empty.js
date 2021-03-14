// empty

// empty provides the identity for the Monoid in that when the value it
//provides is concated to any other value, it will return the other value. In
//the case of Equiv the result of empty is an Equiv that will always
//return true. empty is available on both the Constructor and the Instance
//for convenience.

// Equiv.empty :: () -> Equiv a a

import log from "./log";
import Equiv from 'crocks/Equiv'

import equals from 'crocks/pointfree/equals'

const eq =
  Equiv(equals)

const empty =
  Equiv.empty()

eq
  .concat(empty)
  .compareWith({ a: 32 }, { a: 32 })
//=> true

empty
  .concat(eq)
  .compareWith({ a: 32 }, { a: 32 })
//=> true

empty
  .concat(eq)
  .compareWith({ a: 32, b: 19 }, { a: 32 })
//=> false