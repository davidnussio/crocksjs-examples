// fromPromise

// Used to turn an "eager" Promise returning function into a function that takes
//the same arguments, but returns a "lazy" Async instance instead.

// Async.fromPromise :: (* -> Promise a e) -> (* -> Async e a)

import log from "./log";
undefined