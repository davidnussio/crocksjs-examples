// map

// Provides a means for lifting a normal javascript function into the
//underlying Monad, allowing the innermost value of the underlying Monad to
//be mapped. This method will ignore the outer ReaderT, and be applied directly
//to the underlying Monad.

// Monad m => ReaderT e (m a) ~> (a -> b) -> ReaderT e (m b)

import log from "./log";
import ReaderT from 'crocks/Reader/ReaderT'
import Maybe from 'crocks/Maybe'

import isString from 'crocks/predicates/isString'
import safe from 'crocks/Maybe/safe'

const MaybeReader =
  ReaderT(Maybe)

const { ask, liftFn } = MaybeReader

// maybeString :: a -> Maybe String
const maybeString =
  safe(isString)

// toUpper :: String -> String
const toUpper =
  x => x.toUpperCase()

// envToUpper :: ReaderT e (Maybe String)
const envToUpper =
  ask()
    .chain(liftFn(maybeString))
    .map(toUpper)

envToUpper
  .runWith(4)
//=> Nothing

envToUpper
  .runWith('hola')
//=> Just "HOLA"
