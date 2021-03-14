// of

// of is used to construct an Identity with any given value. It is there to
//allow Identity to work as a pointed functor. 

// Identity.of :: a -> Identity a

import log from "./log";
import Identity from 'crocks/Identity'

Identity.of(42)
//=> Identity 42

Identity.of(true)
//=> Identity true