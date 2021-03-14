// chain

// Combining a sequential series of transformations that capture disjunction can be
//accomplished with chain. chain expects a unary, Either returning function
//as its argument. When invoked on a undefined, chain will not run the function,
//but will instead return another undefined wrapping the original value. When called
//on a undefined however, the inner value will be passed to the provided function,
//returning the result as the new instance.

// Either c a ~> (a -> Either c b) -> Either c b

import log from "./log";
import Either from 'crocks/Either'

import getProp from 'crocks/Maybe/getProp'
import ifElse from 'crocks/logic/ifElse'
import isString from 'crocks/predicates/isString'
import maybeToEither from 'crocks/Either/maybeToEither'
import propEq from 'crocks/predicates/propEq'

const { Left, Right } = Either

// lift :: (b -> Boolean) -> b -> Either c a
const lift = pred =>
  ifElse(pred, Right, Left)

// isPassed :: b -> Either c Object
const isPassed =
  lift(propEq('passed', true))

isPassed({ value: 'Nope' })
// Left { value: "Nope" }

isPassed({ value: 'yes', passed: true })
// Right { value: "yes", passed: true }

// stringOr :: b -> Either c String
const stringOr =
  lift(isString)

// valueOr :: b -> Either c a
const valueOr = x =>
  maybeToEither(x, getProp('value'), x)

// getStringValue :: b -> Either c String
const getStringValue = x =>
  isPassed(x)
    .chain(valueOr)
    .chain(stringOr)

getStringValue({
  value: 'So good',
  passed: true
})
//=> Right "So Good"

getStringValue({
  value: 'Not passed'
})
//=> Left { value: "Not passed" }

getStringValue({
  value: 33,
  passed: true
})
//=> Right "So Good"

getStringValue({
  value: 33,
  passed: true
})
//=> Left 33