// valueOf

// valueOf is used on all crocks Monoids as a means of extraction. While the
//extraction is available, types that implement valueOf are not necessarily
//a Comonad. This function is used primarily for convenience for some of the
//helper functions that ship with crocks. Calling valueOf on
//an Equiv instance will result in the underlying curried equivalence function.

// Equiv a a ~> () -> a -> a -> Boolean

import log from "./log";
import Equiv from 'crocks/Equiv'

import compose from 'crocks/helpers/compose'
import equals from 'crocks/pointfree/equals'
import getPropOr from 'crocks/helpers/getPropOr'

// toLower :: String -> String
const toLower =
  x => x.toLowerCase()

// length :: String -> String
const length =
  x => x.length

// lowerName :: Object -> String
const lowerName =
  compose(toLower, getPropOr('', 'name'))

// itemsLen :: Object -> Number
const itemsLen =
  compose(length, getPropOr('', 'items'))

// eq :: Equiv a a
const eq =
  Equiv(equals)

// checkName :: Equiv Object Object
const checkName =
  eq.contramap(lowerName)

// checkName :: Equiv Object Object
const checkItems =
  eq.contramap(itemsLen)

// test :: Object -> Object -> Boolean
const test =
  checkName
    .concat(checkItems)
    .valueOf()

test(
  { name: 'Bob', items: [ 1, 2, 4 ] },
  { name: 'bOb', items: [ 9, 12, 9 ] }
)
//=> true