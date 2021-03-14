// swap

// Used to map the value of an Either instance and transform a undefined into a
//undefined or a undefined into a undefined, swap takes two functions as its arguments.
//The first function is used to map and transform a undefined into a undefined,
//while the second maps and transforms a undefined into a undefined. If no mapping of
//the contained values is required for either instance,
//then undefined functions can be used in one or both arguments.

// Either c a ~> ((c -> d), (a -> b)) -> Either b d

import log from "./log";
import Either from 'crocks/Either'

import identity from 'crocks/combinators/identity'
import swap from 'crocks/pointfree/swap'

const { Left, Right } = Either

// swapTypes :: Either c a -> Either a c
const swapTypes =
  swap(identity, identity)

swapTypes(Left(45))
//=> Right 45

swapTypes(Right(23))
//=> Left 23

// toString :: Number -> String
const toString =
  x => x.toString()

// toNumber :: String -> Number
const toNumber =
  x => parseInt(x)

// swapValues :: Either Number String -> Either Number String
const swapValues =
  swap(toString, toNumber)

swapValues(Left(23))
//=> Right "23"

swapValues(Right('23'))
//=> Left 23