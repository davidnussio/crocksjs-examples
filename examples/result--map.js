// map

// Used to apply transformations to values in the safety of a Result, map takes
//a function that it will lift into the context of the Result and apply to it
//the wrapped value. When run on an undefined instance, map will apply the
//wrapped value to the provided function and return the result in a new undefined
//instance. When run on an undefined map with return the error value in a new
//undefined instance.

// Result e a ~> (a -> b) -> Result e b

import log from "./log";
import Result from 'crocks/Result'

import assign from 'crocks/helpers/assign'
import compose from 'crocks/helpers/compose'
import composeB from 'crocks/combinators/composeB'
import fanout from 'crocks/Pair/fanout'
import ifElse from 'crocks/logic/ifElse'
import isNumber from 'crocks/predicates/isNumber'
import map from 'crocks/pointfree/map'
import merge from 'crocks/pointfree/merge'
import objOf from 'crocks/helpers/objOf'

const { Ok, Err } = Result

// buildError :: () -> Result String a
const buildError = () =>
  Err('The value given was not a valid number')

// double :: Number -> Number
const double =
  x => x * 2

// fromNumber :: a -> Result String Number
const fromNumber =
  ifElse(isNumber, Ok, buildError)

// doubleNumber :: a -> Result String Number
const doubleNumber = composeB(
  map(double),
  fromNumber
)

doubleNumber(21)
//=> Ok 42

doubleNumber('down')
//=> Err "The value given was not a valid number"

// isEvenOrOdd :: Number -> String
const isEvenOrOdd = n =>
  n % 2 === 0 ? 'Even' : 'Odd'

// getParity :: Number -> Object
const getParity = composeB(
  objOf('parity'),
  isEvenOrOdd
)

// getInfo :: a -> Result String ({ parity: String, value: Number })
const getInfo = compose(
  map(merge(assign)),
  map(fanout(objOf('value'), getParity)),
  fromNumber
)

getInfo(5324)
//=> Ok { parity: "Even", value: 5324 }

getInfo('down')
//=> Err "The value given was not a valid number"