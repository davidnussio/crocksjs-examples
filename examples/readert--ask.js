// ask

// A construction helper that returns a ReaderT with environment on the right
//portion of the Reader. ask can take a function, that can be used to map the
//environment to a different type or value. When using the function version, the
//function must return the type of the Monad the ReaderT wraps, which in turn
//will be wrapped in another

// ReaderT.ask :: Monad m => () -> ReaderT e (m e)
ReaderT.ask :: Monad m => (e -> a) -> ReaderT e (m a)

import log from "./log";
import ReaderT from 'crocks/Reader/ReaderT'
import Maybe from 'crocks/Maybe'

import safe from 'crocks/Maybe/safe'
import isNumber from 'crocks/predicates/isNumber'

const MaybeReader = ReaderT(Maybe)
const { ask } = MaybeReader

// add :: Number -> Number -> Number
const add =
  x => y => x + y

// Typical Constructor
MaybeReader(safe(isNumber))
  .runWith(76)
//=> Just 76

MaybeReader(safe(isNumber))
  .runWith('76')
//=> Nothing

// Using `ask` with no function
// (identity on environment)
ask()
  .runWith(76)
//=> Just 76

ask()
  .runWith('76')
//=> Just '76'

// Using `ask` with a function
// (map environment before deposit)
ask(add(10))
  .runWith(76)
//=> Just 86