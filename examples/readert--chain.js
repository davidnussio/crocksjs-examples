// chain

// Can be used to apply the effects of the underlying Monad with the benefit of
//being able to read from the environment. This method only accepts functions
//of the form Monad m => a -> ReaderT e (m b).

// Monad m => ReaderT e (m a) ~> Reader e (a -> ReaderT e (m b)) -> ReaderT e (m b)

import log from "./log";
import ReaderT from 'crocks/Reader/ReaderT'
import Maybe from 'crocks/Maybe'
import getProp from 'crocks/Maybe/getProp'

const MaybeReader =
  ReaderT(Maybe)

const { ask, liftFn } = MaybeReader

// readProp :: String -> b -> ReaderT e (Maybe a)
const readProp = key =>
  liftFn(getProp(key))

// getName :: ReaderT e (Maybe a)
const getName =
  ask()
    .chain(readProp('name'))

// getFirstName :: ReaderT e (Maybe a)
const getFirstName =
  getName
    .chain(readProp('first'))

// getLastName :: ReaderT e (Maybe a)
const getLastName =
  getName
    .chain(readProp('last'))

// person :: Object
const person = {
  name: {
    first: 'Hazel',
    middle: 'Anne'
  }
}

getFirstName
  .runWith(person)
//=> Just "Hazel"

getLastName
  .runWith(person)
//=> Nothing

getLastName
  .runWith(10)
//=> Nothing