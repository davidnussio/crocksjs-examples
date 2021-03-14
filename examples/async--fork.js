// fork

// The Async type is lazy and will not be executed until told to do so
//and fork is the primary method used for execution. fork implements two
//signatures depending on the need for clean up in the event of cancellation, but
//both return a function that can be used for cancellation of a given instance.

// Async e a ~> ((e -> ()), (a -> ())) -> (() -> ())
Async e a ~> ((e -> ()), (a -> ()), (() -> ())) -> (() -> ())

import log from "./log";
undefined