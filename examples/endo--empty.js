// empty

// empty provides the identity for the Monoid in that when the value it
//provides is concated to any other value, it will return the other value. In
//the case of Endo the result of empty is the identity function, which echoes
//its input. empty is available on both the Constructor and the Instance for
//convenience.

// Endo.empty :: () -> Endo a

import log from "./log";
import Endo from 'crocks/Endo'

import runWith from 'crocks/pointfree/runWith'

// empty :: Endo a
const empty = Endo.empty()

// toUpper :: Endo String
const toUpper =
  Endo(x => x.toUpperCase())

// runNice :: Endo String -> String
const runNice =
  runWith('nice')

runNice(empty.concat(toUpper))
//=> "NICE"

runNice(toUpper.concat(empty))
//=> "NICE"