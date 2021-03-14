// Ok

// Used to construct an undefined instance that represents the "true" portion of
//a disjunction or a valid value. undefined will wrap any given value in an
//undefined, signaling the validity of the wrapped value.

// Result.Ok :: a -> Result e a

import log from "./log";
import Result from 'crocks/Result'

import bimap from 'crocks/pointfree/bimap'
import composeB from 'crocks/combinators/composeB'
import identity from 'crocks/combinators/identity'
import ifElse from 'crocks/logic/ifElse'
import isString from 'crocks/predicates/isString'
import map from 'crocks/pointfree/map'

const { Ok, Err } = Result

// ensure :: (a -> Boolean) -> a -> Result a
const ensure = pred =>
  ifElse(pred, Ok, Err)

// buildError :: () -> String
const buildError = () =>
  'The value given is not a valid string'

// ensureString :: a -> Result String Number
const ensureString = composeB(
  bimap(buildError, identity),
  ensure(isString)
)

// toUpper :: String -> String
const toUpper =
  x => x.toUpperCase()

Ok(32)
//=> Ok 32

Ok(undefined)
//=> Ok undefined

Ok(null)
//=> Ok null

// safeShout :: a -> Result String
const safeShout = composeB(
  map(toUpper),
  ensureString
)

safeShout(45)
//=> Err "The value given is not a valid string"

safeShout('Hey there!')
//=> Ok "HEY THERE!"