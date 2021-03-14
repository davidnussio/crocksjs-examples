// ap

// Short for apply, the ap method is used to apply the resultant of a
//given State instance to a function wrapped in another instance. On
//a State instance that wraps a function, calling ap, providing it
//another State instance, will return a new State instance with the result of
//the function in the resultant portion.

// State s (a -> b) ~> State s a -> State s b

import log from "./log";
undefined