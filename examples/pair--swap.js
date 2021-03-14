// swap

// Used to map the value of a Pairs first position into the second position and
//the second position into the first, swap takes two functions as its arguments.
//The first function is used to map the value in the first position to the second,
//while the second maps the second into the first. If no mapping is required on
//either side, then undefined functions can be used in one or both
//arguments.

// Pair a b ~> ((a -> c), (b -> d)) -> Pair d c

import log from "./log";
import Pair from 'crocks/Pair'

import identity from 'crocks/combinators/identity'
import swap from 'crocks/pointfree/swap'

// toString :: a -> String
const toString =
  x => x.toString()

// swapMap :: Pair a String -> Pair Number String
const swapMap =
  swap(toString, parseInt)

// m :: Pair Number String
const m =
  Pair(76, '105')

m.swap(identity, identity)
//=> Pair("105", 76)

swapMap(m)
//=> Pair(105, "76")