// of

// of is used to construct a Reader with the right portion populated with it's
//argument. of essentially will lift a value of type a into a Reader, giving
//back a Reader that is "pointed" to the specific value provided. of makes
//for a wonderful starting point for some of the more complicated flows.

// Reader.of :: a -> Reader e a

import log from "./log";
import Reader from 'crocks/Reader'

import objOf from 'crocks/helpers/objOf'
import thrush from 'crocks/combinators/applyTo'

const { ask } = Reader

// add :: Number -> Number -> Number
const add =
  x => y => x + y

Reader.of(34)
  .map(add(6))
  .runWith()
//=> 40

Reader.of('Bobby')
  .map(objOf('name'))
  .runWith()
//=> { name: 'Bobby' }

Reader.of(57)
  .chain(x => ask(add).map(thrush(x)))
  .runWith(43)
//=> 100