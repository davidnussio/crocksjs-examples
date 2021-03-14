// compareWith

// As Equiv wraps a function, it needs a means to be run with two values for
//comparison. Instances provide a curried method called compareWith that takes
//two values for comparison and will run them through the equivalence function,
//returning the resulting Boolean.

// Equiv a a ~> a -> a -> Boolean

import log from "./log";
undefined