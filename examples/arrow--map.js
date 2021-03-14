// map

//   map allows a function to be lifted that will map the right side of the Arrow.
//  Where undefined is used to map the input, map maps the result
//  of the Arrow, allowing the result to be "adapted" or modified. The input type
//  to the lifted function must match the result the Arrow.

// Arrow a b ~> (b -> c) -> Arrow a c

import log from "./log";
import Arrow from 'crocks/Arrow'

import B from 'crocks/combinators/composeB'

// arrFullScale :: Arrow Number
const arrFullScale =
  Arrow(x => 20 * Math.log10(Math.abs(x)))

arrFullScale
  .runWith(-0.35)
//=> -9.118639112994488

// round :: Number -> Number
const round =
  x => Math.floor(x * 100) / 100

// stringRep :: Number -> String
const stringRep =
  x => `${x} dBFS`

// Arrow :: Number String
const arrStringFS =
  arrFullScale
    .map(B(stringRep, round))

arrStringFS
  .runWith(0.35)
//=> '-9.12 dbFS'