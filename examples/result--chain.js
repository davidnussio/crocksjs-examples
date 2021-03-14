// chain

// Combining a sequential series of transformations that capture disjunction can
//be accomplished with chain. chain expects a unary, Result returning
//function as its argument. When invoked on an undefined, chain will not run
//the function, but will instead return a new undefined instance with the
//same containing value. When called on an undefined however, the inner value
//will be passed to provided function, returning the result as the new instance.

// Result e a ~> (a -> Result e b) -> Result e b

import log from "./log";
import Result from 'crocks/Result'

import chain from 'crocks/pointfree/chain'
import composeB from 'crocks/combinators/composeB'
import ifElse from 'crocks/logic/ifElse'
import isNumber from 'crocks/predicates/isNumber'
import maybeToResult from 'crocks/Result/maybeToResult'
import map from 'crocks/pointfree/map'
import getProp from 'crocks/Maybe/getProp'

const { Err, Ok } = Result

// errText :: (String | Number) -> String
const errText = name =>
  `${name} does not exist on the value given`

// buildError :: () -> Result String a
const buildError = () =>
  Err('the value given is not valid')

// ensure :: (a -> Boolean) -> a -> Result String a
const ensure = pred =>
  ifElse(pred, Ok, buildError)

// fromNumber :: a -> Result String Number
const fromNumber =
  ensure(isNumber)

// prop :: (String | Number) -> Object -> Result String a
const prop = name =>
  maybeToResult(errText(name), getProp(name))

// protectedAdd10 :: a -> Result String Number
const protectedAdd10 = composeB(
  map(x => x + 10),
  fromNumber
)

// getAge :: Object -> Result String Number
const getAge = composeB(
  chain(fromNumber),
  prop('age')
)

getAge({ name: 'Sarah', age: 21 })
//=> Ok 21

getAge({ name: 'Sarah', age: 'unk' })
//=> Err "the value given is not valid"

getAge({ name: 'Sarah' })
//=> Err "age does not exist on the value given"

getAge({ name: 'Sarah', age: 21 })
  .chain(protectedAdd10)
//=> Ok 31

getAge({ name: 'Sarah', age: 'unk' })
  .chain(protectedAdd10)
//=> Err "the value given is not valid"