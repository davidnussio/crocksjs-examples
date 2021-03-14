// runWith

// Endo wraps a function and as such, its underlying endofunction can be run
//while inside of an Endo by calling runWith. Providing a valid value of the
//same type required by the function, runWith will execute the underlying
//function and return the result.

// Endo a ~> a -> a

import log from "./log";
import Endo from 'crocks/Endo'

import filter from 'crocks/pointfree/filter'
import map from 'crocks/pointfree/map'
import mconcat from 'crocks/helpers/mconcat'

// lt10 :: [ Number ] -> [ Number ]
const lt10 =
  filter(x => x < 10)

// double :: [ Number ] -> [ Number ]
const double =
  map(x => x * 2)

// buildEndo :: [ (a -> a) ] -> Endo a
const flow =
  mconcat(Endo, [ lt10, double ])

flow
  .runWith([ 12, 5, 3, 90 ])
//=> [ 10, 6 ]

flow
  .runWith([])
//=> []