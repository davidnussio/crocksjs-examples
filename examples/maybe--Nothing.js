// Nothing

// Used to construct a Nothing instance that represents the "false" portion of
//a disjunction. When an instance is a Nothing, most Maybe returning methods
//will just return another Nothing. Anything passed to the constructor will
//be thrown out and mapped to ().

// Maybe.Nothing :: () -> Maybe a

import log from "./log";
import Maybe from 'crocks/Maybe'

import chain from 'crocks/pointfree/chain'
import isNumber from 'crocks/predicates/isNumber'
import safeLift from 'crocks/Maybe/safeLift'

const { Just, Nothing } = Maybe

// add10 :: Number -> Number
const add10 =
  x => x + 10

// safeAdd10 :: a -> Maybe Number
const safeAdd10 =
  safeLift(isNumber, add10)

Just(23)
  .map(add10)
//=> Just 33

Nothing(23)
  .map(add10)
//=> Nothing

chain(safeAdd10, Just(10))
//=> Just 20

chain(safeAdd10, Nothing())
//=> Nothing