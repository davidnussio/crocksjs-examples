// fst

// fst is one of two projection methods used to extract the values contained in
//a given Pair instance. fst takes nothing as its input and will unwrap and
//provide the value in the first position, throwing away the value in the second.
//undefined is the other projection function provided and is used to extract
//the value in the second position.

// Pair a b ~> () -> a

import log from "./log";
import Pair from 'crocks/Pair'

Pair('left', 'right')
  .fst()
//=> "left"