// merge

// Used to fold a given n-Tuple into a single value, merge accepts a function
//of any arity and will apply each value in the n-Tuple, in order, to the
//provided function. merge returns the result of the application.

// 1-Tuple a ~> (a -> b) -> b
2-Tuple a b ~> ((a, b) -> c) -> c
3-Tuple a b c ~> ((a, b, c) -> d) -> d
...

import log from "./log";
undefined