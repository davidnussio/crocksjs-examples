// sequence

// When an instance of Result wraps an Apply instance, sequence can be used to
//swap the type sequence. sequence requires either an Applicative TypeRep or
//an Apply returning function is provided for its argument. This will be used in
//the case that the Result instance is a undefined.

// Apply f => Result e (f a) ~> (b -> f b) -> f (Result e a)
Applicative f => Result e (f a) ~> TypeRep f -> f (Result e a)

import log from "./log";
undefined