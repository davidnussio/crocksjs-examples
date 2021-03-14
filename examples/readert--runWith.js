// runWith

// In order to unwrap the underlying Monad, ReaderT needs to be ran with a
//given environment. A ReaderT instance comes equipped with a runWith method
//that accepts an environment and returns the resulting Monad.

// Monad m => ReaderT e (m a) ~> e -> m a

import log from "./log";
import ReaderT from 'crocks/Reader/ReaderT'
import Maybe from 'crocks/Maybe'

import getProp from 'crocks/Maybe/getProp'

const MaybeReader = ReaderT(Maybe)
const { ask, liftFn } = MaybeReader

// data :: Object
const data = {
  animals: [
    'tiger', 'muskrat', 'mouse'
  ]
}

// length :: Array -> Number
const length =
  x => x.length

// prop :: String -> ReaderT Object (Maybe [])
const prop = key =>
  ask()
    .chain(liftFn(getProp(key)))

prop('animals')
  .map(length)
  .runWith(data)
//=> Just 3