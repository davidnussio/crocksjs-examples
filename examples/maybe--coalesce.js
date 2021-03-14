// coalesce

// When one would like to undefined a Maybe but would like to remain
//within a Maybe type, coalesce can be used. coalesce expects two functions
//for its inputs.

// Maybe a ~> ((() -> b), (a -> b))) -> Maybe b

import log from "./log";
undefined