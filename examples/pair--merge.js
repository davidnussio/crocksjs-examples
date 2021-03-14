// merge

// Acting as a means to fold a given Pair over a binary operation, merge takes
//a binary function as its sole argument. Using the function, merge will unwrap
//each of its values and apply them to the function in order from first to second.
//The result of the provided function is then provided as the overall result
//for merge.

// Pair a b ~> ((a, b) -> c) -> c

import log from "./log";
undefined