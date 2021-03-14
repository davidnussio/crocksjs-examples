// empty

// empty provides the identity for the Monoid in that when the value it
//provides is concated to any other value, it will return the other value. In
//the case of Pred the result of empty is a Pred that will always
//return true. empty is available on both the Constructor and the Instance
//for convenience.

// Pred.empty :: () -> Pred a

import log from "./log";
import Pred from 'crocks/Pred'

import isEmpty from 'crocks/predicates/isEmpty'
import not from 'crocks/logic/not'

// empty :: Pred a
const empty =
  Pred.empty()

// notEmpty :: Pred a
const notEmpty =
  Pred(not(isEmpty))

empty
  .runWith('')
//=> true

notEmpty
  .concat(empty)
  .runWith([])
//=> false

notEmpty
  .concat(empty)
  .runWith([ 1, 2, 3 ])
//=> true

empty
  .concat(notEmpty)
  .runWith('')
//=> false

empty
  .concat(notEmpty)
  .runWith('123')
//=> true