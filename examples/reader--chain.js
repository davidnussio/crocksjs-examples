// chain

// One of the ways Monads like Reader are able to be combined and have their
//effects applied, is by using the chain method. In the case of Reader, the
//effect is to read in and make available the shared environment. chain expects
//a function that will take any a and return a new Reader with a value of b.

// Reader e a ~> (a -> Reader e b) -> Reader e b

import log from "./log";
import Reader from 'crocks/Reader'

import B from 'crocks/combinators/composeB'
import getProp from 'crocks/Maybe/getProp'
import option from 'crocks/pointfree/option'

const { ask } = Reader

// multiply :: Number -> Number -> Number
const multiply =
  x => y => x * y

// add :: Number -> Number -> Number
const add  =
  x => y => x + y

// propOr :: (String, a) -> b -> a
const propOr = (key, def) =>
  B(option(def), getProp(key))

// applyScale :: Number -> Reader Object Number
const applyScale = x =>
  ask(propOr('scale', 1))
    .map(multiply(x))

// applyScale :: Number -> Reader Object Number
const applyOffset = x =>
  ask(propOr('offset', 0))
    .map(add(x))

// applyTransforms :: Number -> Reader Object Number
const applyTransform = x =>
  Reader.of(x)
    .chain(applyOffset)
    .chain(applyScale)

applyTransform(45)
  .runWith({})
//=> 45

applyTransform(45)
  .runWith({ offset: 20 })
//=> 65

applyTransform(45)
  .runWith({ scale: 2 })
//=> 90

applyTransform(45)
  .runWith({ scale: 2, offset: 20 })
//=> 130