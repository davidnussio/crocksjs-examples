// of

// Lifts a value into a ReaderT using the of method of the underlying Monad.
//of will disregard the environment and points the right portion to the provided
//value.

// ReaderT.of :: Monad m => a -> ReaderT e (m a)

import log from "./log";
import ReaderT from 'crocks/Reader/ReaderT'

import Maybe from 'crocks/Maybe'
import Either from 'crocks/Either'
import State from 'crocks/State'

const MaybeReader = ReaderT(Maybe)
const EitherReader = ReaderT(Either)
const StateReader = ReaderT(State)

MaybeReader.of('yep')
  .map(x => x.toUpperCase())
  .runWith(23)
//=> Just "YEP"

EitherReader.of(43)
  .runWith(23)
//=> Right 43

StateReader.of(0)
  .runWith(23)
  .runWith(42)
//=> Pair(0, 42)