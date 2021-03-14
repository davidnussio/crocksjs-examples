// second

//   Used to apply a given Arrow over the second slot of a Pair, leaving the
//  first slot untouched. The input to the Arrow must match the expected type on
//  the second slot of the incoming Pair.

// Pair p => Arrow a b ~> () -> Arrow (p c a) (p c b)

import log from "./log";
import Arrow from 'crocks/Arrow'

import assign from 'crocks/helpers/assign'
import branch from 'crocks/Pair/branch'
import merge from 'crocks/pointfree/merge'
import objOf from 'crocks/helpers/objOf'

// names :: Object
const names = {
  first: 'Joey',
  last: 'Fella'
}

// arrFull :: Arrow Object
const arrFull =
  Arrow(({ first, last }) => `${first} ${last}`)
    .map(objOf('full'))
//=> { full: 'Joey Fella' }

// arrAddFull :: Arrow Object
const arrAddFull =
  arrFull
    .second()
    .promap(branch, merge(assign))

arrAddFull
  .runWith(names)
//=> { full: 'Joey Fella', first: 'Joey', last: 'Fella' }