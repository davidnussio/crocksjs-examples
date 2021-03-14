// map

// Used to apply transformations to values to the second portion of a
//given Pair instance. map takes a function that it will lift into the
//context of the Pair and apply to it second value in the Pair, returning a
//new Pair instance. The new instance will contain the result of mapping in the
//second, leaving the value in the first untouched. If you need to map the first
//value, undefined can be used instead.

// Pair c a ~> (a -> b) -> Pair c b

import log from "./log";
import Pair from 'crocks/Pair'

import compose from 'crocks/helpers/compose'
import map from 'crocks/pointfree/map'
import merge from 'crocks/pointfree/merge'
import objOf from 'crocks/helpers/objOf'

// length :: String -> Number
const length =
  x => x.length

// add10 :: Number -> Number
const add10 =
  x => x + 10

// keyedLength :: Pair String String -> Object
const keyedLength =
  compose(merge(objOf), map(length))

Pair('number', 32)
  .map(add10)
//=> Pair("number", 42)

keyedLength(
  Pair('text', 'This is some text')
)
//=> { text: 17 }