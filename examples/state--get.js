// get

// A construction helper that is used to access the state portion of a
//given State instance. To make the state accessible, get will place the
//state in the resultant portion, overwriting what was there previously.

// State.get :: () -> State s s
State.get :: (s -> a) -> State s a

import log from "./log";
undefined