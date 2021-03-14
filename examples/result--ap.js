// ap

// Short for apply, ap is used to apply a Result instance containing a value to
//another Result instance that contains a function, resulting in
//new Result instance with the result. ap requires that it is called on
//an instance that is either an undefined or an undefined that wraps a
//curried polyadic function.

// Result e (a -> b) ~> Result e a -> Result e b

import log from "./log";
undefined