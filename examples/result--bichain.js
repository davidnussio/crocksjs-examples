// bichain

// Combining a sequential series of transformations that capture disjunction can be
//accomplished with undefined. Along the same lines, bichain allows you
//to do this from both undefined and undefined. bichain expects
//two unary, Either returning functions as its arguments. When invoked on
//an undefined instance, bichain will use
//the left, or first, function that can return either an undefined or
//an undefined instance. When called on an undefined instance, it
//will behave exactly as undefined would with the right, or
//second, function.

// Result c a ~> ((c -> Result d b), (a -> Result d b)) -> Result d b

import log from "./log";
import Result from 'crocks/Result'

import bichain from 'crocks/pointfree/bichain'
import compose from 'crocks/helpers/compose'
import composeK from 'crocks/helpers/composeK'
import constant from 'crocks/combinators/constant'
import equals from 'crocks/pointfree/equals'
import getProp from 'crocks/Maybe/getProp'
import isNumber from 'crocks/predicates/isNumber'
import map from 'crocks/pointfree/map'
import maybeToResult from 'crocks/Result/maybeToResult'
import objOf from 'crocks/helpers/objOf'
import safe from 'crocks/Maybe/safe'
import substitution from 'crocks/combinators/substitution'
import tryCatch from 'crocks/Result/tryCatch'

const { Err, Ok } = Result

// swapResult :: Result e a -> Result a e
const swapResult =
  bichain(Ok, Err)

swapResult(Err('err'))
//=> Ok "err"

swapResult(Ok('ok'))
//=> Err "ok"

// Wrapped :: { value: Number }
// wrapEven :: Number -> Wrapped
function wrapEven(num) {
  if(!isNumber(num)) {
    throw new TypeError('wrapEven: Must be a Number')
  }

  if(num % 2) {
    throw new Error('wrapEven: Nunber must be even')
  }

  return { value: num }
}

// increment :: Number -> Number
const increment = x =>
  x + 1

const checkEvenError = composeK(
  safe(equals('wrapEven: Nunber must be even')),
  getProp('message')
)

// alwaysWrapInc :: Number -> () -> Wrapped
const alwaysWrapInc = compose(
  constant,
  objOf('value'),
  increment
)

// makeWrappedEven :: Number -> Error -> Maybe Wrapped
const makeWrappedEven = orig => compose(
  map(alwaysWrapInc(orig)),
  checkEvenError
)

// resolveError :: Number -> Error -> Result Error Wrapped
const resolveError = compose(
  substitution(maybeToResult),
  makeWrappedEven
)

// safeWrapEven :: Number -> Result Error Wrapped
const safeWrapEven = num =>
  tryCatch(wrapEven, num)
    .bichain(resolveError(num), Ok)

safeWrapEven(2)
//=> Ok { value: 2 }

safeWrapEven(42)
//=> Ok { value: 42 }

safeWrapEven(23)
//=> Ok { value: 24 }

safeWrapEven('92')
//=> Err TypeError: wrapEven: Must be a Number

safeWrapEven(null)
//=> Err TypeError: wrapEven: Must be a Number