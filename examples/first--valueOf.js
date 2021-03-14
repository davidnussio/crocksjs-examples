// valueOf

// valueOf is used on all crocks Monoids as a means of extraction. While the
//extraction is available, types that implement valueOf are not necessarily
//a Comonad. This function is used primarily for convenience for some of the
//helper functions that ship with crocks. Calling valueOf on
//a First instance will result in the underlying undefined.

// First a ~> () -> Maybe a

import log from "./log";
import First from 'crocks/First'

import Maybe from 'crocks/Maybe'
import valueOf from 'crocks/pointfree/valueOf'

const { Nothing } = Maybe

valueOf(First(56))
//=> Just 56

valueOf(First.empty())
//=> Nothing

First(37)
  .concat(First(99))
  .valueOf()
//=> Just 37

First(Nothing())
  .concat(First.empty())
  .valueOf()
//=> Nothing