// concat

// concat is used to combine two Semigroups of the same type under an operation
//specified by the Semigroup. In the case of Equiv, the results of
//both Equivs are combined under logical conjunction.

// Equiv a a ~> Equiv a a -> Equiv a a

import log from "./log";
import Equiv from 'crocks/Equiv'

import compareWith from 'crocks/pointfree/compareWith'
import equals from 'crocks/pointfree/equals'
import isSameType from 'crocks/predicates/isSameType'
import getPropOr from 'crocks/helpers/getPropOr'

// objLength :: Object -> Number
const objLength =
  x => Object.keys(x).length

// eq :: Equiv a a
const eq =
  Equiv(equals)

// sameType :: Equiv a a
const sameType =
  Equiv(isSameType)

// sameType :: Equiv Object Object
const length =
  eq.contramap(objLength)

// sameType :: Equiv a a
const sameTypeProp = key =>
  sameType.contramap(getPropOr(null, key))

// run :: Equiv Object Object
const run = compareWith(
  { a: 19, b: 'string' },
  { a: 32, c: false }
)

run(length)
//=> true

run(sameTypeProp('a'))
//=> true

run(sameTypeProp('b'))
//=> false

run(
  sameTypeProp('a')
    .concat(length)
)
// true

run(
  sameTypeProp('b')
    .concat(length)
)
// false