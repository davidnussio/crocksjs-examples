// chain

// Combining a sequential series of transformations that allows for custom
//accumulation in addition to transforming a value. chain requires
//a Pair returning function that contains a Semigroup in its first position.
//As anadditional requirement, is that instances of the same Semigroup must
//occupy the first position of the source Pair and the Pair returned by the
//function.

// Semigroup s => Pair s a ~> (a -> Pair s b) -> Pair s b

import log from "./log";
const Pair = require('crocks/Pair')

const setProp = require('crocks/helpers/setProp')
const omit = require('crocks/helpers/omit')

// addTmp :: (String, a, Object) -> Pair [ String ] Object
const addTmp = (key, value, x) =>
  Pair([ key ], setProp(key, value, x))

// add :: Object -> Pair [ String ] Object
const add = data => {
  const { a, b } = data
  return addTmp('sum', a + b, data)
}

// multiply :: Object -> Pair [ String ] Object
const multiply = data => {
  const { a, b } = data
  return addTmp('product', a * b, data)
}

// calc :: Object -> Object
const calc = data => {
  const { product, sum } = data
  return setProp('result', product - sum, data)
}

// flow :: Object -> Object
const flow = x =>
  Pair([], x)
    .chain(add)
    .chain(multiply)
    .map(calc)
    .merge(omit)

flow({ a: 34, b: 76 })
//=> { a: 34, b: 76, result: 2474 }

flow({ a: 10, b: 5 })
//=> { a: 10, b: 5, result: 35 }