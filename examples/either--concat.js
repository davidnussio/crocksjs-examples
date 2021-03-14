// concat

// When an underlying undefined value of a given Either is fixed to
//a Semigroup, concat can be used to concatenate  another undefined instance
//with an underlying Semigroup of the same type. Expecting an Either wrapping
//a Semigroup of the same type, concat will give back a new Either instance
//wrapping the result of combining the two underlying Semigroups. When called on
//a undefined instance, concat will return a undefined containing the initial value.

// Semigroup s => Either c s ~> Either c s -> Either c s

import log from "./log";

import Either from 'crocks/Either'

import Assign from 'crocks/Assign'
import compose from 'crocks/helpers/compose'
import concat from 'crocks/pointfree/concat'
import flip from 'crocks/combinators/flip'
import ifElse from 'crocks/logic/ifElse'
import isObject from 'crocks/predicates/isObject'
import mapReduce from 'crocks/helpers/mapReduce'

const { Left, Right } = Either

Right([ 1, 2 ])
  .concat(Right([ 4, 5 ]))
//=> Right [ 1, 2, 3, 4 ]

Right([ 1, 2 ])
  .concat(Left('Error'))
//=> Left "Error"

// lift :: Object -> Either c Assign
const lift =
  compose(Right, Assign)

// liftObject :: b -> Either c Assign
const liftObject =
  ifElse(isObject, lift, Left)

// Foldable f => fold :: f * -> Either * Assign
const fold = mapReduce(
  liftObject,
  flip(concat),
  Either(Assign.empty())
)

fold([ { a: 'a' }, { b: 'b' } ])
//=> Right Assign { a: "a", b: "b" }

fold([
  { a: 'a' }, null, { c: 'c' }
])
//=> Left null