// chain

// Combining a sequential series of transformations that capture disjunction can be
//accomplished with chain. chain expects a unary, Maybe returning function
//as its argument. When invoked on a Nothing, chain will not run the function,
//but will instead return another Nothing. When called on a Just however, the
//inner value will be passed to provided function, returning the result as the
//new instance.

// Maybe a ~> (a -> Maybe b) -> Maybe b

import log from "./log";
import Maybe from 'crocks/Maybe'

import chain from 'crocks/pointfree/chain'
import compose from 'crocks/helpers/compose'
import getProp from 'crocks/Maybe/getProp'
import isNumber from 'crocks/predicates/isNumber'
import isString from 'crocks/predicates/isString'
import safe from 'crocks/Maybe/safe'
import safeLift from 'crocks/Maybe/safeLift'

const { Nothing, Just } = Maybe

// double :: Number -> Number
const double =
  x => x + x

// chainNumber :: Maybe a -> Maybe Number
const chainNumber =
  chain(safe(isNumber))

// doubleValue :: a -> Maybe Number
const doubleValue = compose(
  chain(safeLift(isNumber, double)),
  getProp('value')
)

chainNumber(Just(45))
//=> Just 45

chainNumber(Nothing())
//=> Nothing

Just(45)
  .chain(safe(isString))
//=> Nothing

doubleValue(undefined)
//=> Nothing

doubleValue({ value: '45' })
//=> Nothing

doubleValue({ number: 45 })
//=> Nothing

doubleValue({ value: 45 })
//=> Just 90