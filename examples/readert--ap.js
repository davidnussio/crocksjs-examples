// ap

// Applies wrapped functions to the provided value, using the ap of the
//underlying Monad. A ReaderT of the underlying Monad must be provided,
//which allows access to the environment.

// Monad m => ReaderT e (m (a -> b)) ~> ReaderT e (m a) -> ReaderT e (m b)

import log from "./log";
import Pair from 'crocks/Pair'
import ReaderT from 'crocks/Reader/ReaderT'
import Result from 'crocks/Result'

import fst from 'crocks/Pair/fst'
import snd from 'crocks/Pair/snd'

import ifElse from 'crocks/logic/ifElse'
import isNumber from 'crocks/predicates/isNumber'
import liftA2 from 'crocks/helpers/liftA2'

const { Err, Ok } = Result

const ResultReader =
  ReaderT(Result)

const { ask, liftFn } = ResultReader

// add :: Number -> Number -> Number
const add =
  x => y => x + y

// makeError :: a -> Result [ String ] b
const makeErr =
  x => Err([ `${x} is not a Number` ])

// isValid :: a -> ReaderT e (Result [ String ] Number)
const isValid = liftFn(
  ifElse(isNumber, Ok, makeErr)
)

// first :: ReaderT (Pair a b) (Result [ String ] Number)
const first =
  ask(fst)
    .chain(isValid)

// second :: ReaderT (Pair a b) (Result [ String ] Number)
const second =
  ask(snd)
    .chain(isValid)

// Using a fluent style with of
ResultReader.of(add)
  .ap(first)
  .ap(second)
  .runWith(Pair(34, 21))
//=> Ok 55

// Using a fluent style with map
first
  .map(add)
  .ap(second)
  .runWith(Pair(true, 21))
//=> Err [ "true is not a Number" ]

// Using liftA2
liftA2(add, first, second)
  .runWith(Pair('Bob', 'Jones'))
//=> Err [ 'Bob is not a Number', 'Jones is not a Number' ]