// put

// Used to replace the state portion of a given State instance,, put can be
//employed anytime that the state can change without having to know about it's
//previous value. If the previous value is required for a given stateful
//computation, undefined can be used to lift a function that represents
//the change.

// State.put :: s -> State s ()

import log from "./log";
undefined