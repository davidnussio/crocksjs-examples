// traverse

// Used to apply the "effect" of an Apply to a value inside of a Result,
//traverse combines both the "effects" of the Apply and the Result by
//returning a new instance of the Apply, wrapping the result of
//the Applys "effect" on the value in the Result.

// Apply f => Result e a ~> (c -> f c), (a -> f b)) -> f Result e b
Applicative f => Result e a ~> (TypeRep f, (a -> f b)) -> f Result e b

import log from "./log";
undefined