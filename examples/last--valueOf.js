// valueOf

// valueOf is used on all crocks Monoids as a means of extraction. While the
//extraction is available, types that implement valueOf are not necessarily
//a Comonad. This function is used primarily for convenience for some of the
//helper functions that ship with crocks. Calling valueOf on a Last instance
//will result in the underlying undefined.

// Last a ~> () -> Maybe a

import log from "./log";
import Last from 'crocks/Last'

import Maybe from 'crocks/Maybe'
import valueOf from 'crocks/pointfree/valueOf'

const { Nothing } = Maybe

valueOf(Last(56))
//=> Just 56

valueOf(Last.empty())
//=> Nothing

Last(37)
  .concat(Last(99))
  .valueOf()
//=> Just 99

Last(Nothing())
  .concat(Last.empty())
  .valueOf()
//=> Nothing