// Just

// Used to construct a Just instance that represents the "true" portion of a
//disjunction or a valid value.  Just will wrap any given value in
//a Just, signaling the validity of the wrapped value.

// Maybe.Just :: a -> Maybe a

import log from "./log";
import Maybe from 'crocks/Maybe'

import compose from 'crocks/helpers/compose'
import ifElse from 'crocks/logic/ifElse'
import isString from 'crocks/predicates/isString'
import map from 'crocks/pointfree/map'

const { Just, Nothing } = Maybe

// toUpper :: String -> String
const toUpper =
  x => x.toUpperCase()

// safe :: (a -> Boolean) -> a -> Maybe a
const safe =
  pred => ifElse(pred, Just, Nothing)

// safeShout :: a -> Maybe String
const safeShout = compose(
  map(toUpper),
  safe(isString)
)

safeShout(45)
//=> Nothing

safeShout('Hey there!')
//=> Just "HEY THERE!"