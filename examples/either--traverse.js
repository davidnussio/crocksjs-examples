// traverse

// Used to apply the "effect" of an Apply to a value inside of an Either,
//traverse combines both the "effects" of the Apply and the Either by
//returning a new instance of the Apply, wrapping the result of
//the Applys "effect" on the value in the supplied Either.

// Apply f => Either c a ~> (d -> f d), (a -> f b)) -> f Either c b
Applicative f => Either c a ~> (TypeRep f, (a -> f b)) -> f Either c b

import log from "./log";
undefined