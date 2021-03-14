// Single entities (CommonJS)

// Single entities (JS Modules)

// // require in each entity directly
const and = require('crocks/logic/and')
const curry = require('crocks/helpers/curry')
const isNumber = require('crocks/predicates/isNumber')
const liftA2 = require('crocks/helpers/liftA2')
const safe = require('crocks/Maybe/safe')

// divide :: Number -> Number
const divide =
  x => y => x / y

// safeNumber :: a -> Maybe Number
const safeNumber =
  safe(isNumber)

// notZero :: a -> Maybe Number
const notZero = safe(
  and(isNumber, x => x !== 0)
)

// safeDivide:: a -> Maybe Number
const safeDivide = curry(
  (x, y) => liftA2(divide, safeNumber(x), notZero(y))
)

safeDivide(20, 0)
//=> Nothing

safeDivide(20, 5)
//=> Just 4

safeDivide('number', 5)
//=> Nothing

import log from "./log";
// import in each entity directly
import and from 'crocks/logic/and'
import curry from 'crocks/helpers/curry'
import isNumber from 'crocks/predicates/isNumber'
import liftA2 from 'crocks/helpers/liftA2'
import safe from 'crocks/Maybe/safe'

// divide :: Number -> Number
const divide =
  x => y => x / y

// safeNumber :: a -> Maybe Number
const safeNumber =
  safe(isNumber)

// notZero :: a -> Maybe Number
const notZero = safe(
  and(isNumber, x => x !== 0)
)

// safeDivide:: a -> Maybe Number
const safeDivide = curry(
  (x, y) => liftA2(divide, safeNumber(x), notZero(y))
)

safeDivide(20, 0)
//=> Nothing

safeDivide(20, 5)
//=> Just 4

safeDivide('number', 5)
//=> Nothing