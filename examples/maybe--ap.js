// ap

// Short for apply, ap is used to apply a Maybe instance containing a value
//to another Maybe instance that contains a function, resulting in
//new Maybe instance with the result. ap requires that it is called on
//an instance that is either a Nothing or a Just that wraps a curried
//polyadic function.

// Maybe (a -> b) ~> Maybe a -> Maybe b

import log from "./log";
undefined