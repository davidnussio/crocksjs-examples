// or

// Say you have two predicate functions or undefineds and would like to
//combine them into one predicate over disjunction, look no further, or accepts
//either predicate functions or undefineds and will return you a function '
//ready to take a value. Once that value is passed, it will run it through both of
//the predicates and return the result of combining it over a logical or. This
//is super helpful when combined with and for putting together reusable, complex
//predicates. As they follow the general form of (a -> Boolean) they are easily
//combined with other logic functions.

// or :: ((a -> Boolean) | Pred) -> ((a -> Boolean) | Pred) -> a -> Boolean

import log from "./log";
//  p | q | p || q
// ================
//  T | T |   T
//  T | F |   T
//  F | T |   T
//  F | F |   F

import or from 'crocks/logic/or'

import constant from 'crocks/combinators/constant'
import isEmpty from 'crocks/predicates/isEmpty'
import not from 'crocks/logic/not'
import propSatisfies from 'crocks/predicates/propSatisfies'
import pathSatisfies from 'crocks/predicates/pathSatisfies'

or(constant(true), constant(true), 'ignored')
//=> true

or(constant(true), constant(false), 'ignored')
//=> true

or(constant(false), constant(true), 'ignored')
//=> true

or(constant(false), constant(false), 'ignored')
//=> false

// Response :: { error: String, response: { users: [ * ] } }

// createResponse :: ([ * ], String) -> Response
const createResponse = (users, error = '') => ({
  error,
  response: {
    users
  }
})

// hasData :: Response -> Boolean
const hasData = or(
  propSatisfies('error', isEmpty),
  pathSatisfies([ 'response', 'users' ], not(isEmpty))
)

hasData(createResponse([ { name: 'User 1' } ]))
//=> true

hasData(createResponse([], 'No users found'))
//=> false
