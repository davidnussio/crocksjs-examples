// zero

// When working with Alts, zero provides a sort of empty or identity
//for Maybe when used with undefined. zero takes no arguments and returns
//a Nothing instance. Just like an empty method on a given Monoid, zero can
//be used to fold a collection of Alts under alt.

// Maybe.zero :: () -> Maybe a

import log from "./log";
import Maybe from 'crocks/Maybe'

import alt from 'crocks/pointfree/alt'
import flip from 'crocks/combinators/flip'
import isNumber from 'crocks/predicates/isNumber'
import mapReduce from 'crocks/helpers/mapReduce'
import safe from 'crocks/Maybe/safe'

const { Nothing, Just, zero } = Maybe

// firstValid :: [ * ] -> Maybe Number
const firstValid =
  mapReduce(safe(isNumber), flip(alt), zero())

Just(33)
  .alt(zero())
//=> Just 33

zero()
  .alt(Just(33))
//=> Just 33

Nothing()
  .alt(zero())
//=> Nothing

zero()
  .alt(Nothing())
//=> Nothing

firstValid([ null, 'nope', 10, 45 ])
//=> Just 10

firstValid([ 75, null, 'nope' ])
//=> Just 75

firstValid([ null, undefined, 'wrong' ])
//=> Nothing