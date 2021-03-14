// swap

// Used to map the value of a Result instance and transform an undefined into an
//undefined or an undefined into an undefined, swap takes two functions as its arguments.
//The first function is used to map and transform an undefined into an undefined,
//while the second maps and transforms an undefined into an undefined. If no mapping of
//the contained values is required for either instance,
//then undefined functions can be used in one or both arguments.

// Result e a ~> ((e -> a), (a -> e)) -> Result e a

import log from "./log";
import Result from 'crocks/Result'

import constant from 'crocks/combinators/constant'
import identity from 'crocks/combinators/identity'
import ifElse from 'crocks/logic/ifElse'
import isNumber from 'crocks/predicates/isNumber'
import when from 'crocks/logic/when'
import swap from 'crocks/pointfree/swap'

const { Ok, Err } = Result

// simpleSwap :: Result e a -> Result a e
const simpleSwap =
  swap(identity, identity)

simpleSwap(Ok(42))
//=> Err 42

simpleSwap(Err(21))
//=> Ok 21

// ensure :: (a -> Boolean) -> a -> Result String a
const ensure = pred =>
  ifElse(pred, Ok, Err)

// fromNumber :: a -> Result String Number
const fromNumber =
  ensure(isNumber)

// toString :: Number -> String
const toString = x =>
  x.toString()

// toNumber :: String -> Number
const toNumber = x =>
  parseInt(x)

// parseWithDefault :: Number -> a -> Number
const parseWithDefault = defaultValue => value =>
  when(isNaN, constant(defaultValue), toNumber(value))

// swapWith :: Result String Number -> Result String Number
const swapValues =
  swap(parseWithDefault(0), toString)

swapValues(fromNumber(4))
//=> Err "4"

swapValues(fromNumber('number'))
//=> Ok 0