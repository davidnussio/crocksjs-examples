// valueOf

// valueOf is used on all crocks Monoids as a means of extraction. While the
//extraction is available, types that implement valueOf are not necessarily
//a Comonad. This function is used primarily for convenience for some of the
//helper functions that ship with crocks. Calling valueOf on
//an Endo instance will result in the underlying endofunction.

// Endo a ~> () -> (a -> a)

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
const buildEndo =
  mconcat(Endo)

// fn :: [ Number ] -> [ Number ]
const fn =
  buildEndo([ lt10, double ])
    .valueOf()

fn([ 12, 5, 3, 90 ])
//=> [ 10, 6 ]

fn([])
//=> []