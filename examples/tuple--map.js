// map

// Used to lift a single function into a given n-Tuple to map the rightmost
//value. map takes a function (a -> b) and will return a
//new n-Tuple instance with the result of mapping the rightmost value from its
//original a type to the resulting b.

// 1-Tuple a ~> (a -> b) -> 1-Tuple b
2-Tuple a b ~> (b -> c) -> 2-Tuple a c
...

import log from "./log";
undefined