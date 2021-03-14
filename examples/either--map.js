// map

// Used to apply transformations to values undefined instances of Either, map takes
//a function that it will lift into the context of the Either and apply to
//it the wrapped value. When ran on a undefined instance, map will apply the
//wrapped value to the provided function and return the result in a
//new undefined instance.

// Either c a ~> (a -> b) -> Either c b

import log from "./log";
import Either from 'crocks/Either'

import compose from 'crocks/helpers/compose'
import ifElse from 'crocks/logic/ifElse'
import isNumber from 'crocks/predicates/isNumber'
import map from 'crocks/pointfree/map'
import objOf from 'crocks/helpers/objOf'

const { Left, Right } = Either

// add :: Number -> Number -> Number
const add =
  x => y => x + y

Right(25)
  .map(add(10))
//=> Right 35

Left('Some String')
  .map(add(10))
//=> Left "Some String"

// numberOr :: a -> Either b Number
const numberOr = ifElse(
  isNumber, Right, Left
)

// add10 -> a -> Either b Number
const add10 = compose(
  map(add(10)),
  numberOr
)

add10(45)
//=> Right 55

add10('some string')
//=> Left "some string"

const processResult = compose(
  map(compose(objOf('result'), add(20))),
  numberOr
)

processResult({ a: 57 })
//=> Left { a: 57 }

processResult(57)
//=> Right{ result: 77 }