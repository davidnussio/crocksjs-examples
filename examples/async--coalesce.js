// coalesce

// Used as a means to apply a computation to a undefined instance and then map
//any undefined value while transforming it to a undefined to continue
//computation. coalesce on an Async can be used to model the all too
//familiar, and more imperative if/else flow in a more declarative manner.

// Async e a ~> ((e -> b), (a -> b))) -> Async e b

import log from "./log";
undefined