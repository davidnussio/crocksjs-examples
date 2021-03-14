// implies

// implies is a logic combinator that will combine the evaluation of two
//predicates over logical implication. It takes any combination of predicate
//functions or undefineds as its first two arguments and will return a new
//predicate function that will return false when the first predicate evaluates
//to true and the second evaluates to false. All other combinations will
//return true.

// implies :: ((a -> Boolean) | Pred a) -> ((a -> Boolean) | Pred a) -> a -> Boolean

import log from "./log";
undefined