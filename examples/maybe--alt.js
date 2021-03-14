// alt

// Providing a means for a fallback or alternative value, alt combines
//two Maybe instances and will return the first Just it encounters or Nothing if
//it does not have a Just. This can be used in conjunction with undefined to
//return the first valid value in contained in a Foldable structure.

// Maybe a ~> Maybe a -> Maybe a

import log from "./log";
import Maybe from 'crocks/Maybe'

import alt from 'crocks/pointfree/alt'
import isArray from 'crocks/predicates/isArray'
import flip from 'crocks/combinators/flip'
import mapReduce from 'crocks/helpers/mapReduce'
import safe from 'crocks/Maybe/safe'

const { zero, Nothing, Just } = Maybe

// firstArray :: Foldable f => f * -> Maybe Array
const firstArray =
  mapReduce(safe(isArray), flip(alt), zero())

Nothing()
  .alt(Just(33))
//=> Just 33

Just(42)
  .alt(Nothing())
  .alt(Just(99))
//=> Just 42

firstArray([ 'Not Array', null, [ 2, 3, 4 ], [ 1, 2 ] ])
//=> Just [ 2, 3, 4 ]

firstArray([ null, 5, '76' ])
//=> Nothing