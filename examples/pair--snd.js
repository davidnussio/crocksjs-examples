// snd

// snd is one of two projection methods used to extract the values contained in
//a given Pair instance. snd takes nothing as its input and will unwrap and
//provide the value in the second position, throwing away the value in the first.
//undefined is the other projection function provided and is used to extract
//the value in the first position.

// Pair a b ~> () -> b

import log from "./log";
import Pair from 'crocks/Pair'

Pair('left', 'right')
  .snd()
//=> "right"