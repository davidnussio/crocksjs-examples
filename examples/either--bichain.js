// bichain

// Combining a sequential series of transformations that capture disjunction can be
//accomplished with undefined. Along the same lines, bichain allows you
//to do this from both undefined and undefined. bichain expects
//two unary, Either returning functions as its arguments. When invoked on
//a undefined instance, bichain will use
//the left, or first, function that can return either a undefined or
//a undefined instance. When called on a undefined instance, it
//will behave exactly as undefined would with the right, or
//second, function.

// Either c a ~> ((c -> Either d b), (a -> Either d b)) -> Either d b

import log from "./log";
import Either from 'crocks/Either'

import bichain from 'crocks/pointfree/bichain'
import compose from 'crocks/helpers/compose'
import ifElse from 'crocks/logic/ifElse'
import isNumber from 'crocks/predicates/isNumber'
import isString from 'crocks/predicates/isString'
import map from 'crocks/pointfree/map'

const { Left, Right } = Either

// swapEither :: Either a b -> Either b a
const swapEither =
  bichain(Right, Left)

swapEither(Left('left'))
//=> Right "left"

swapEither(Right('right'))
//=> Left "right"

// length :: String -> Number
const length = x =>
  x.length

// add10 :: Number -> Number
const add10 = x =>
  x + 10

// safe :: (a -> Boolean) -> a -> Either c b
const safe = pred =>
  ifElse(pred, Right, Left)

// stringLength :: a -> Either e Number
const stringLength = compose(
  map(length),
  safe(isString)
)

// nested :: a -> Either c Number
const nested = compose(
  map(add10),
  bichain(stringLength, Right),
  safe(isNumber)
)

nested('cool')
//=> Right 14

nested(true)
//=> Left true

nested(13)
//=> Right 23