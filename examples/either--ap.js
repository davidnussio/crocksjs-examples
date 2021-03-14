// ap

// Short for apply, ap is used to apply an Either instance containing a value
//to another Either instance that contains a function, resulting in
//new Either instance containing the result of the application. ap requires
//that it is called on either a undefined containing anything or a undefined that
//wraps a curried polyadic function.

// Either c (a -> b) ~> Either c a -> Either c b

import log from "./log";
undefined