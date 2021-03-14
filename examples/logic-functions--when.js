// when

// There may come a time when you need to adjust a value when a condition is true,
//that is where when can come into play. Just provide a predicate function (a
//function that returns a Boolean) and a function to apply your desired
//modification. This will get you back a function that when you pass it a value,
//it will evaluate it and if true, will run your value through the provided
//function. Either the original or modified value will be returned depending on
//the result of the predicate. Check out undefined for a negated version
//of this function.

// when :: ((a -> Boolean) | Pred) -> (a -> a) -> a -> a

import log from "./log";
<!-- eslint-disable no-console -->