// runWith

// As Pred wraps a predicate function, it needs a mean to run it with some value
//to test against the predicate. Pred instances provide a method
//called runWith that will accept the value to be tested and then runs it
//through the predicate returning the result.

// Pred a ~> a -> Boolean

import log from "./log";
undefined