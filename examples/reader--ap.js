// ap

// ap allows for values wrapped in a Reader to be applied to functions also
//wrapped in a Reader. In order to use ap, the Reader must contain a
//function as its value. Under the hood, ap unwraps both the function
//and the value to be applied and applies the value to the function. Finally it
//will wrap the result of that application back into a Reader. It is required
//that the inner function is curried.

// Reader e (a -> b) ~> Reader e a -> Reader e b

import log from "./log";
import Reader from 'crocks/Reader'

import B from 'crocks/combinators/composeB'
import assign from 'crocks/helpers/assign'
import liftA2 from 'crocks/helpers/liftA2'
import objOf from 'crocks/helpers/objOf'

const { ask } = Reader

// namePart :: Number -> String -> String
const namePart = indx => x =>
  x.split(' ')[indx] || ''

// combine :: Object -> Reader Object
const combine =
  x => ask(assign(x))

// full :: Reader Object
const full =
  ask(({ full }) => full)

// first :: Reader Object
const first =
  full
    .map(B(objOf('first'), namePart(0)))

// last :: Reader Object
const last =
  full
    .map(B(objOf('last'), namePart(1)))

// fluent style
Reader.of(assign)
  .ap(first)
  .ap(last)
  .chain(combine)
  .runWith({ full: 'Mary Jones' })
//=> { full: 'Mary Jones', first: 'Mary', last: 'Jones' }

// liftAssign :: Reader Object -> Reader Object -> Reader Object
const liftAssign =
  liftA2(assign)

// using a lift function
liftAssign(first, last)
  .chain(combine)
  .runWith({ full: 'Tom Jennings' })
//=> { full: 'Tom Jennings', first: 'Tom', last: 'Jennings' }