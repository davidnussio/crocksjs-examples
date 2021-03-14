// ap

// Short for apply, ap is used to apply an Async instance containing a value
//to another Async instance that contains a function, resulting in
//new Async instance with the result. ap requires that it is called on
//an instance that is either undefined or undefined that wraps a curried
//polyadic function.

// Async e (a -> b) ~> Async e a -> Async e b

import log from "./log";
undefined