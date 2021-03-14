// traverse

// Used to apply the "effect" of an Apply to a value inside of a Maybe,
//traverse combines both the "effects" of the Apply and the Maybe by
//returning a new instance of the Apply, wrapping the result of
//the Applys "effect" on the value in the Maybe.

// Apply f => Maybe a ~> (c -> f c), (a -> f b)) -> f Maybe b
Applicative f => Maybe a ~> (TypeRep f, (a -> f b)) -> f Maybe b

import log from "./log";
undefined