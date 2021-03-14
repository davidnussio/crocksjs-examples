// first

//   When calling first on an Arrow, a new Arrow is returned that will expect
//  a Pair with the original input type in the first slot of the Pair. When run,
//  the Arrow will only be applied to the first slot in the Pair, leaving
//  the second slot untouched.

// Pair p => Arrow a b ~> () -> Arrow (p a c) (p b c)

import log from "./log";
import Arrow from 'crocks/Arrow'
import branch from 'crocks/Pair/branch'

// arrToUpper :: Arrow String
const arrToUpper =
  Arrow(x => x.toUpperCase())

arrToUpper
  .runWith('burrito bounce')
//=> 'BURRITO BOUNCE'

// join :: Pair String -> Object
const join = p => ({
  original: p.snd(),
  result: p.fst()
})

// flow :: Arrow String Object
const flow =
  arrToUpper
    .first()
    .promap(branch, join)

flow
  .runWith('taco time')
//=> { original: 'taco time', result: 'TACO TIME' }