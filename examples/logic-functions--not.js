// not

// When you need to negate a predicate function or a undefined, but want a new
//predicate function that does the negation, then not is going to get you what
//you need. Using not will allow you to stay as declarative as possible. Just
//pass not your predicate function or a undefined, and it will give you
//back a predicate function ready for insertion into your flow. All predicate
//based functions in crocks take either a undefined or predicate
//function, so it should be easy to swap between the two.

// not :: ((a -> Boolean) | Pred) -> a -> Boolean

import log from "./log";
//  p | !p
// ========
//  T | F
//  F | T

import not from 'crocks/logic/not'

import Pred from 'crocks/Pred'

import and from 'crocks/logic/and'
import compose from 'crocks/helpers/compose'
import flip from 'crocks/combinators/flip'
import identity from 'crocks/combinators/identity'
import isString from 'crocks/predicates/isString'
import propSatisfies from 'crocks/predicates/propSatisfies'

// isFalsy :: a -> Boolean
const isFalsy =
  not(identity)

// isTruthy :: a -> Boolean
const isTruthy =
  not(isFalsy)

isTruthy('Test string')
//=> true

isTruthy('')
//=> false

isFalsy('')
//=> true

isFalsy('Test string')
//=> false

// User :: { email: String, firstName: String, lastName: String}

// validUser :: User
const validUser = {
  email: 'testuser@email.com',
  firstName: 'Tom',
  lastName: 'Smith'
}

// invalidUser :: User
const invalidUser = {
  email: '',
  firstName: '',
  lastName: 'Smith'
}

// isNonEmptyString :: a -> Boolean
const isNonEmptyString =
  and(isString, isTruthy)

// hasValidStringProp :: String -> User -> Boolean
const hasValidStringProp = compose(
  Pred,
  flip(propSatisfies, isNonEmptyString)
)

// hasName :: User -> Boolean
const hasName =
  hasValidStringProp('firstName')

// hasEmail :: User -> Boolean
const hasEmail =
  hasValidStringProp('email')

// isUserInvalid :: User -> Boolean
const isUserInvalid =
  Pred(not(hasName))
    .concat(Pred(not(hasEmail)))

isUserInvalid
  .runWith(invalidUser)
//=> true

isUserInvalid
  .runWith(validUser)
//=> false