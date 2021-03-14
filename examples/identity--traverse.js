// traverse

// Used to apply the "effect" of an Apply to a value inside of a Identity,
//traverse combines both the "effects" of the Apply and the Identity by
//returning a new instance of the Apply, wrapping the result of
//the Applys "effect" on the value in the Identity.

// Apply f => Identity a ~> (a -> f b) -> f (Identity b)
Applicative f => Identity a ~> (TypeRep f, (a -> f b)) -> f (Identity a b)

import log from "./log";
undefined