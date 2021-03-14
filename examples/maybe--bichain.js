// bichain

// Combining a sequential series of transformations that capture disjunction can be
//accomplished with undefined. Along the same lines, bichain allows you
//to do this from both undefined and undefined. bichain expects
//two unary, Either returning functions as its arguments. When invoked on
//a undefined instance, bichain will use
//the left, or first, function that can return either a undefined or
//a undefined instance. When called on a undefined instance, it
//will behave exactly as undefined would with the right, or
//second, function.

// Maybe a ~> ((() -> Maybe b), (a -> Maybe b)) -> Maybe b

import log from "./log";
import Maybe from 'crocks/Maybe'

import bichain from 'crocks/pointfree/bichain'
import constant from 'crocks/combinators/constant'

const { Nothing, Just } = Maybe

// swapMaybe :: Maybe a -> Maybe b
const swapMaybe = bichain(
  constant(Just('nothing')),
  Nothing
)

swapMaybe(Nothing())
//=> Just Nothing

swapMaybe(Just('just'))
//=> Nothing