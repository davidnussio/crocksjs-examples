// Right

// Used to construct a Right instance of the an Either that represents
//the true portion of a disjunction. The Right constructor takes any value and
//will return a new Right instance wrapping the value provided.

// Either.Right :: a -> Either c a

import log from "./log";
import Either from 'crocks/Either'

import compose from 'crocks/helpers/compose'
import composeK from 'crocks/helpers/composeK'
import ifElse from 'crocks/logic/ifElse'
import isNumber from 'crocks/predicates/isNumber'

const { Left, Right } = Either

// validate :: (b -> Boolean) -> Either c a
const validate = pred =>
  ifElse(pred, Right, Left)

// add10 :: Number -> Number
const add10 =
  x => x + 10

Right(10)
  .map(add10)
//=> Right 20

Left('Not A Number')
  .map(add10)
//=> Left "Not A Number"

// validNumber :: b -> Either c Number
const validNumber =
  validate(isNumber)

validNumber('60')
//=> Left "60"

validNumber(null)
//=> Left null

validNumber(60)
//=> Right 60

// safeAdd10 :: b -> Either c Number
const safeAdd10 = composeK(
  compose(Right, add10),
  validNumber
)

safeAdd10([ 7 ])
//=> Left [ 7 ]

safeAdd10(null)
//=> Left null

safeAdd10(5)
//=> Right 15

// isLarge :: Number -> Either Number Number
const isLarge =
  validate(x => x >= 10)

// isLargeNumber :: b -> Either c Number
const isLargeNumber =
  composeK(isLarge, validNumber)

// add10ToLarge :: b -> Either c Number
const add10ToLarge =
  composeK(safeAdd10, isLargeNumber)

add10ToLarge()
//=> Left undefined

add10ToLarge('40')
//=> Left "40"

add10ToLarge(5)
//=> Left 5

add10ToLarge(10)
//=> Right 20