// either

// Used to provide a means to map a given Maybe instance while optioning out the
//wrapped value. undefined can handle most cases for optioning Maybe,
//but does not provide a means to map a given value at the time of
//optioning. either expects two functions as its arguments. The first is a
//pointed function that will be used when invoked on a Nothing. While the second
//will map the value wrapped in a given Just and return the result of that
//mapping.

// Maybe a ~> ((() -> b), (a -> b)) -> b

import log from "./log";
import Maybe from 'crocks/Maybe'

import either from 'crocks/pointfree/either'

const { Nothing, Just } = Maybe

// wrap :: a -> [ a ]
const wrap =
  x => [ x ]

// empty :: () -> [ a ]
const empty =
  () => []

// toArray :: Maybe a -> [ a ]
const toArray =
  either(empty, wrap)

toArray(Just(56))
//=> [ 56 ]

toArray(Nothing())
//=> []