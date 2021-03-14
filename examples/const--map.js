// map

// Typically used to lift a function into the context of an ADT, but due to the
//unique behavior of Const, any function that is passed in to map will be
//validated but it will not be applied. map will return a new Const with
//the same left value.

// Const c a ~> (a -> b) -> Const c b

import log from "./log";
import Const from 'crocks/Const'
import Identity from 'crocks/Identity'
import Maybe from 'crocks/Maybe'

import map from 'crocks/pointfree/map'

const { Just } = Maybe

// MaybeConst :: Maybe a -> MaybeConst (Maybe a)
const MaybeConst =
  Const(Maybe)

// add10 :: Functor f => f Number -> f Number
const add10 =
  map(x => x + 10)

Identity(Just(3))
  .map(add10)
//=> Identity Just 13

MaybeConst(Just(3))
  .map(add10)
//=> Const(Maybe) Just 3