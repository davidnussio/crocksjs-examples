// unless

// There may come a time when you need to adjust a value when a condition is false,
//that is where unless can come into play. Just provide a predicate function (a
//function that returns a Boolean) and a function to apply your desired
//modification. This will get you back a function that when you pass it a value,
//it will evaluate it and if false, will run your value through the provided
//function. Either the original or modified value will be returned depending on
//the result of the predicate. Check out undefined for a negated version of
//this function.

// unless :: ((a -> Boolean) | Pred) -> (a -> a) -> a -> a

import log from "./log";
import unless from 'crocks/logic/unless'

import constant from 'crocks/combinators/constant'
import flip from 'crocks/combinators/flip'
import isString from 'crocks/predicates/isString'

// double :: Number -> Number
const double = a =>
  a * 2

// doubleUnless :: (a -> Boolean) -> Number -> Number
const doubleUnless =
  flip(unless, double)

doubleUnless(constant(true), 21)
//=> 21

doubleUnless(constant(false), 21)
//=> 42

// toString :: a -> String
const toString = x =>
  x.toString()

// ensureString :: a -> String
const ensureString =
  unless(isString, toString)

// testData :: [ * ]
const testData =
  [ 1, 2, '3', 4, true, false, new Date(1770, 3, 29) ]

testData.map(ensureString)
//=> [ '1', '2', '3', '4', 'true', 'false', 'Sun Apr 29 1770 00:00:00 GMT-0752 (Pacific Daylight Time)' ]