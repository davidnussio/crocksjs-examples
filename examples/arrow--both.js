// both

//   both allows for the mode of a given Arrow to switch to a manner that applies
//  itself to both slots of a Pair that is passed through the Arrow. As noted in
//  the type signature, both will give back an Arrow has a new signature that
//  utilizes a Pair on both sides.

// Pair p => Arrow a b ~> () -> Arrow (p a a) (p b b)

import log from "./log";
import Arrow from 'crocks/Arrow'
import Pair from 'crocks/Pair'

import merge from 'crocks/pointfree/merge'

// double :: Number -> Number
const double =
  x => x * 2

// add :: (Number, Number) -> Number
const add =
  (x, y) => x + y

// arrDouble :: Arrow Number
const arrDouble =
  Arrow(double)

// arrDoubleAndAdd :: Arrow (Pair Number Number) Number
const arrDoubleAndAdd =
  arrDouble
    .both()
    .map(merge(add))

arrDouble
  .runWith(200)
//=> 400

arrDoubleAndAdd
  .runWith(Pair(200, 10))
//=> 420