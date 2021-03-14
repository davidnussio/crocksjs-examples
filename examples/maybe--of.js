// of

// Used to wrap any value into a Maybe as a Just, of is used mostly by
//helper functions that work "generically" with instances of
//either Applicative or Monad. When working specifically with
//the Maybe type, the undefined constructor should be used. Reach
//for of when working with functions that will work with
//ANY Applicative/Monad.

// Maybe.of :: a -> Maybe a

import log from "./log";
import Maybe from 'crocks/Maybe'

import curry from 'crocks/helpers/curry'
import isString from 'crocks/predicates/isString'
import safe from 'crocks/Maybe/safe'

const { Just } = Maybe

Maybe(35)
//=> Just 35

Just(35)
//=> Just 35

Maybe.of(35)
//=> Just 35

const safeString =
  safe(isString)

// lift2 :: Applicative m => (a -> b -> c) -> m a -> m b -> m c
const lift2 = curry(
  (fn, x, y) => x.of(fn).ap(x).ap(y)
)

// join :: Applicative m => m String -> m String -> m String
const join =
  lift2(a => b => `${a} ${b}`)

join(safeString('Brad'), safeString('Pitt'))
//=> Just "Brad Pitt"

join(safeString(34), safeString('Pitt'))
//=> Nothing