// concat

// When an underlying value of a given Maybe is fixed to a Semigroup, concat can
//be used to concat another Maybe instance with an underlying Semigroup of
//the same type. Expecting a Maybe wrapping a Semigroup of the same
//type, concat will give back a new Maybe instance wrapping the result of combining
//the two underlying Semigroups. When called on a Nothing instance, concat will
//return a Nothing.

// Semigroup s => Maybe s ~> Maybe s -> Maybe s

import log from "./log";
import Maybe from 'crocks/Maybe'

import Sum from 'crocks/Sum'

import compose from 'crocks/helpers/compose'
import concat from 'crocks/pointfree/concat'
import flip from 'crocks/combinators/flip'
import isNumber from 'crocks/predicates/isNumber'
import map from 'crocks/pointfree/map'
import mapReduce from 'crocks/helpers/mapReduce'
import safeLift from 'crocks/Maybe/safeLift'
import valueOf from 'crocks/pointfree/valueOf'

const { Nothing, Just } = Maybe

// safeSum :: a -> Maybe Sum
const safeSum =
  safeLift(isNumber, Sum)

// empty :: Maybe Sum
const empty =
  Just(Sum.empty())

// sumList :: [ * ] -> Maybe Number
const sumList = compose(
  map(valueOf),
  mapReduce(safeSum, flip(concat), empty)
)

Just([ 34 ])
  .concat(Just([ 92 ]))
//=> Just [ 34, 92 ]

Just([ 34 ])
  .concat(Nothing())
//=> Nothing

sumList([ 3, 4, 5 ])
//=> Just 12

sumList([ 'three', 4, 'five' ])
//=> Nothing