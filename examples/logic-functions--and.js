// and

// Say you have two predicate functions or undefineds and would like to
//combine them into one predicate over conjunction, well you came to the right
//place, and accepts either predicate functions or undefineds and will
//return you a function ready to take a value. Once that value is passed, it will
//run it through both of the predicates and return the result of combining it over
//a logical and. This is super helpful when combined with or for putting
//together reusable, complex predicates. As they follow the general form
//of (a -> Boolean) they are easily combined with other logic functions.

// and :: ((a -> Boolean) | Pred a) -> ((a -> Boolean) | Pred a) -> a -> Boolean

import log from "./log";
//  p | q | p && q
// ================
//  T | T |   T
//  T | F |   F
//  F | T |   F
//  F | F |   F

import and from 'crocks/logic/and'

import constant from 'crocks/combinators/constant'
import isArray from 'crocks/predicates/isArray'
import isEmpty from 'crocks/predicates/isEmpty'
import isNumber from 'crocks/predicates/isNumber'
import not from 'crocks/logic/not'

// gte :: Number -> Number -> Boolean
const gte = x => y =>
  y >= x

// isLegalDrinkingAge :: Number -> Boolean
const isLegalDrinkingAge =
    and(isNumber, gte(21))

// isValid :: a -> Boolean
const isValid =
  and(isArray, not(isEmpty))

isLegalDrinkingAge(18)
//=> false

isLegalDrinkingAge(21)
//=> true

isValid([ 42 ])
//=> true

isValid(null)
//=> false

isValid([])
//=> false

and(constant(true), constant(true), 'ignored')
//=> true

and(constant(true), constant(false), 'ignored')
//=> false

and(constant(false), constant(true), 'ignored')
//=> false

and(constant(false), constant(false), 'ignored')
//=> false