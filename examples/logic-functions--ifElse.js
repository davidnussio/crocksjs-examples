// ifElse

// Whenever you need to modify a value based some condition and want a functional
//way to do it without some imperative if statement, then reach for ifElse.
//This function take a predicate (some function that returns a Boolean) and two
//functions. The first is what is executed when the predicate is true, the second
//on a false condition. This will return a function ready to take a value to run
//through the predicate. After the value is evaluated, it will be ran through it's
//corresponding function, returning the result as the final result. This function
//comes in really handy when creating lifting functions for Sum Types
//(like Either or undefined).

// ifElse :: ((a -> Boolean) | Pred a) -> (a -> b) -> (a -> b) -> a -> b

import log from "./log";
import ifElse from 'crocks/logic/ifElse'

import Maybe from 'crocks/Maybe'

import chain from 'crocks/pointfree/chain'
import compose from 'crocks/helpers/compose'
import identity from 'crocks/combinators/identity'
import isArray from 'crocks/predicates/isArray'
import isNumber from 'crocks/predicates/isNumber'

const { Just, Nothing } = Maybe

// safe :: (a -> Boolean) -> a -> Maybe a
const safe = pred =>
  ifElse(pred, Just, Nothing)

// gte :: Number -> Number -> Maybe Number
const gte = x =>
  safe(n => n >= x)

// isLarge :: a -> Maybe a
const isLarge =
  compose(chain(gte(42)), safe(isNumber))

// ensureArray :: a -> Array
const ensureArray =
  ifElse(isArray, identity, () => [])

isLarge(10)
//=> Nothing

isLarge(44)
//=> Just 44

ensureArray('nope')
  .map(x => x + x)
//=> []

ensureArray([ 3 ])
  .map(x => x + x)
//=> [ 6 ]