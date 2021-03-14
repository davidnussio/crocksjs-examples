// map

// While the left side, or the environment, of the Reader must always be fixed
//to the same type, the right side, or value, of the Reader may vary.
//Using map allows a function to be lifted into the Reader, mapping the
//result into the result of the lifted function.

// Reader e a ~> (a -> b) -> Reader e b

import log from "./log";
import Reader from 'crocks/Reader'

import assign from 'crocks/helpers/assign'
import B from 'crocks/combinators/composeB'
import getProp from 'crocks/Maybe/getProp'
import objOf from 'crocks/helpers/objOf'
import option from 'crocks/pointfree/option'

const { ask } = Reader

// length :: Array -> Number
const length =
  x => x.length

ask()
  .map(length)
  .runWith([ 1, 2, 3 ])
//=> 3

// propOr :: (String, a) -> b -> a
const propOr = (key, def) =>
  B(option(def), getProp(key))

// lengthObj :: Array -> Object
const lengthObj =
  B(objOf('length'), length)

// addLength :: Object -> Reader Array Object
const addLength = x =>
  ask(propOr('list', []))
    .map(B(assign(x), lengthObj))

Reader.of({ num: 27 })
  .chain(addLength)
  .runWith({ list: [ 1, 2, 3 ] })
//=> { length: 3, num: 27 }