// liftFn

// Used to transform a given function in the form of a -> m b into a lifted
//function, where m is the underlying Monad of a ReaderT. This allows for
//the removal of composition boilerplate that results from using the
//undefined helper.

// ReaderT.liftFn :: Monad m => (a -> m b) -> a -> ReaderT e (m b)

import log from "./log";
import ReaderT from 'crocks/Reader/ReaderT'
import Either from 'crocks/Either'

import ifElse from 'crocks/logic/ifElse'

const EitherReader = ReaderT(Either)

const { ask, liftFn } = EitherReader
const { Left, Right } = Either

// gte :: Number -> Number -> Either String Number
const gte = x => ifElse(
  n => n >= x,
  Right,
  n => Left(`${n} is not gte to ${x}`)
)

// gte10 :: Number -> Either String Number
const gte10 =
  gte(10)

// add20 :: ReaderT Number (Either String Number)
const add20 =
  ask()
    .chain(liftFn(gte10))
    .map(n => n + 20)

add20
  .runWith(30)
//=> Right 50

add20
  .runWith(9)
//=> Left "9 is not gte to 10"