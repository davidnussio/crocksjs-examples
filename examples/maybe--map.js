// map

// Used to apply transformations to values in the safety of a Maybe, map takes
//a function that it will lift into the context of the Maybe and apply to it
//the wrapped value. When ran on a Just instance, map will apply the wrapped
//value to the provided function and return the result in a new Just instance.

// Maybe a ~> (a -> b) -> Maybe b

import log from "./log";
import Maybe from 'crocks/Maybe'

import assign from 'crocks/helpers/assign'
import compose from 'crocks/helpers/compose'
import isObject from 'crocks/predicates/isObject'
import isString from 'crocks/predicates/isString'
import map from 'crocks/pointfree/map'
import safe from 'crocks/Maybe/safe'

const { Nothing, Just } = Maybe

// add10 :: Number -> Number
const add10 =
  x => x + 10

// toUpper :: String -> String
const toUpper = x =>
  x.toUpperCase()

// safeObj :: a -> Maybe Object
const safeObj =
  safe(isObject)

// shout :: a -> Maybe String
const shout = x =>
  safe(isString, x)
    .map(toUpper)

// setProcessed :: a -> Maybe Object
const setProcessed = compose(
  map(assign({ processed: true })),
  safeObj
)

Just(0)
  .map(add10)
//=> Just 10

Nothing()
  .map(add10)
//=> Nothing

shout('good news')
//=> Just "GOOD NEWS"

shout(33)
//=> Nothing

setProcessed({ cheese: true })
//=> Just { cheese: true, processed: true }

setProcessed(null)
//=> Nothing