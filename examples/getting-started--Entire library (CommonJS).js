// Entire library (CommonJS)

// Entire library (JS Modules)

// // namespace entire suite to crocks variable
const crocks = require('crocks')

// pluck anything that does not require name-spacing
const { safe, isNumber } = crocks

// still requires entire object, but removes name-spacing
const { and, liftA2 } = require('crocks')

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
const safeDivide = crocks.curry(
  (x, y) => liftA2(divide, safeNumber(x), notZero(y))
)

safeDivide(20, 0)
//=> Nothing

safeDivide(20, 5)
//=> Just 4

safeDivide('number', 5)
//=> Nothing

import log from "./log";
// namespace entire suite to crocks variable
import crocks from 'crocks'

// still imports entire object, but removes name-spacing
import { and, liftA2 }  from 'crocks'

// pluck anything that does not require name-spacing
const { safe, isNumber } = crocks

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
const safeDivide = crocks.curry(
  (x, y) => liftA2(divide, safeNumber(x), notZero(y))
)

safeDivide(20, 0)
//=> Nothing

safeDivide(20, 5)
//=> Just 4

safeDivide('number', 5)
//=> Nothing