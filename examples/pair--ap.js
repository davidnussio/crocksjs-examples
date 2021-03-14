// ap

// Short for apply, ap is used to apply a Pair instance containing a value on
//its second portion to another Pair instance that contains a function in its
//second portion. The result of this application provides a new Pair instance
//containing the result in the second portion. ap requires that it is called on
//an instance that wraps a curried polyadic function in the second.

// Semigroup s => Pair s (a -> b) ~> Pair s a -> Pair s b

import log from "./log";
undefined