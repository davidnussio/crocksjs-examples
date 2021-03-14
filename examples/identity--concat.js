// concat

// When an underlying value of a given Identity is fixed to a Semigroup, 
//concat can be used to concat another Identity instance with an
//underlying Semigroup of the same type. Expecting an Identity wrapping
//a Semigroup of the same type, concat will give back a
//new Identity instance wrapping the result of combining the two
//underlying Semigroups.

// Identity s => Identity s ~> Identity s -> Identity s

import log from "./log";
import Identity from 'crocks/Identity'

import Sum from 'crocks/Sum'

import compose from 'crocks/helpers/compose'
import concat from 'crocks/pointfree/concat'
import flip from 'crocks/combinators/flip'
import map from 'crocks/pointfree/map'
import mapReduce from 'crocks/helpers/mapReduce'
import valueOf from 'crocks/pointfree/valueOf'

// empty :: Identity Sum
const empty =
  Identity(Sum.empty())

// sumList :: [ * ] -> Identity Number
const sumList = compose(
  map(valueOf),
  mapReduce(compose(Identity, Sum), flip(concat), empty)
)

Identity([ 34 ])
  .concat(Identity([ 92 ]))
//=> Identity [ 34, 92 ]

sumList([ 3, 4, 5 ])
//=> Identity 12