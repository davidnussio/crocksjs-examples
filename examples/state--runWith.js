// runWith

// State is a lazy datatype that requires a value for it's state portion to be
//run. A given State instance provides a runWith method that accepts a value
//to run the instance with. The value must be a member of the type that the
//given State instance is fixed to in it's state portion, s.

// State s a ~> s -> Pair a s

import log from "./log";
undefined