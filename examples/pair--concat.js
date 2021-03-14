// concat

// When both underlying values of a given Pair are fixed to
//a Semigroup, concat can be used to concatenate another Pair instance
//with underlying Semigroups of the same type and structure. Expecting
//a Maybe wrapping a Semigroup of the same type, concat will give back a
//new Pair instancewrapping the result of combining the
//underlying Semigroup instances.

// Semigroup s, t => Pair s t ~> Pair s t -> Pair s t

import log from "./log";
import Pair from 'crocks/Pair'
import Maybe from 'crocks/Maybe'
import Sum from 'crocks/Sum'

import compose from 'crocks/helpers/compose'
import concat from 'crocks/pointfree/concat'
import fanout from 'crocks/Pair/fanout'
import flip from 'crocks/combinators/flip'
import getProp from 'crocks/Maybe/getProp'
import map from 'crocks/pointfree/map'
import mapReduce from 'crocks/helpers/mapReduce'
import option from 'crocks/pointfree/option'

Pair(Sum(3), [ 3 ])
  .concat(Pair(Sum(10), [ 10 ]))
//=> Pair( Sum 13, [ 3, 10 ] )

// Person :: { name: String, age: Number }
// peeps :: [ Person ]
const peeps = [
  { name: 'Haskell', age: 82 },
  { name: 'Heinrich', age: 81 },
  { name: 'Maria', age: 93 }
]

// mapProp :: (String, (a -> b)) -> Object -> Maybe b
const mapProp = (key, fn) =>
  compose(map(fn), getProp(key))

// Combined :: Pair (Maybe [ String ]) (Maybe Sum)
// splitPerson :: Person -> Combined
const splitPerson = fanout(
  mapProp('name', x => [ x ]),
  mapProp('age', Sum)
)

// empty :: Combined
const empty =
  Pair(Maybe([]), Maybe(Sum.empty()))

// combine :: [ Person ] -> Combined
const combine = mapReduce(
  splitPerson,
  flip(concat),
  empty
)

combine(peeps)
  .bimap(option([]), option(Sum(0)))
//=> Pair( [ "Haskell", "Heinrich", "Maria" ], Sum 256 )